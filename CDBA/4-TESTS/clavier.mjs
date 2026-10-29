// Clavier, chaque page à 1280 px : on tabule jusqu'à revenir au premier élément ou sortir de la page.
// Vérifie : contour de focus visible (repris de l'audit des phases 3 à 9), aucun piège (le parcours boucle),
// ordre du Tab = ordre du document, lien d'évitement en premier s'il existe et sa cible présente.
import { BASE, PAGES, NAVIGATEUR, lancer } from './commun.mjs';

const navigateur = await lancer();
const version = navigateur.version();
const page = await navigateur.newPage({ viewport: { width: 1280, height: 900 } });
const problemes = [];

for (const p of PAGES) {
  await page.goto(BASE + p);
  const max = 2 * await page.evaluate(() => document.querySelectorAll('a[href], button, input, select, textarea, [tabindex]').length) + 5;
  const parcours = [];
  let fini = false;
  for (let i = 0; i < max && !fini; i++) {
    await page.keyboard.press('Tab');
    const f = await page.evaluate(() => {
      const e = document.activeElement;
      if (!e || e === document.body) return 'sortie'; // Chromium : le focus part vers l'interface du navigateur
      const cs = getComputedStyle(e);
      const tabulables = [...document.querySelectorAll('a[href], button:not([disabled]), input:not([disabled]):not([type=hidden]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])')]
        .filter((x) => x.getClientRects().length);
      return {
        dernier: !tabulables.some((x) => e.compareDocumentPosition(x) & Node.DOCUMENT_POSITION_FOLLOWING),
        rang: [...document.querySelectorAll('*')].indexOf(e),
        nom: `${e.tagName.toLowerCase()}${e.id ? '#' + e.id : ''} « ${(e.textContent || e.name || '').trim().slice(0, 30)} »`,
        visible: cs.outlineStyle !== 'none' && parseFloat(cs.outlineWidth) > 0,
        evitement: e.classList.contains('lien-evitement'),
        cible: e.classList.contains('lien-evitement') ? Boolean(document.querySelector(e.getAttribute('href'))) : null,
      };
    });
    // Firefox (Playwright) laisse le focus sur le dernier élément au lieu de sortir : fin de page seulement si
    // le focus ne bouge plus ET que l'élément est le dernier tabulable du document ; bloqué ailleurs = piège.
    const bloqueEnFin = f !== 'sortie' && parcours.length && f.rang === parcours.at(-1).rang && f.dernier;
    // Champ composé (date : jour, mois, année) : plusieurs Tab dans le même élément, compté une seule fois.
    if (f !== 'sortie' && !bloqueEnFin && parcours.length && f.rang === parcours.at(-1).rang) continue;
    if (f === 'sortie' || bloqueEnFin || (parcours.length && f.rang === parcours[0].rang)) { fini = parcours.length > 0; continue; }
    parcours.push(f);
  }
  if (!fini) problemes.push(`${p} : piège au clavier possible, le focus ne sort pas de la page et ne revient pas au début (${max} Tab)`);
  for (const f of parcours) if (!f.visible) problemes.push(`${p} : focus sans contour visible sur ${f.nom}`);
  for (let i = 1; i < parcours.length; i++) {
    if (parcours[i].rang <= parcours[i - 1].rang) problemes.push(`${p} : ordre du Tab inversé, ${parcours[i].nom} après ${parcours[i - 1].nom}`);
  }
  const aEvitement = await page.locator('.lien-evitement').count() > 0;
  if (aEvitement && !parcours[0]?.evitement) problemes.push(`${p} : le lien d'évitement n'est pas le premier élément atteint`);
  if (aEvitement && parcours[0]?.evitement && !parcours[0].cible) problemes.push(`${p} : cible du lien d'évitement introuvable`);
  console.log(`${p} : ${parcours.length} éléments atteints, lien d'évitement ${aEvitement ? 'oui' : 'non'}`);
}
await navigateur.close();

console.log(`${PAGES.length} pages (${NAVIGATEUR} ${version})`);
console.log(problemes.length ? problemes.join('\n') : 'Clavier : aucun problème.');
process.exitCode = problemes.length ? 1 : 0;

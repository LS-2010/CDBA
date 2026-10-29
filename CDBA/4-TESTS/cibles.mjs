// Cibles tactiles : liens, boutons et champs d'au moins 44 × 44 px, à 320 et 390 px de large.
// Ignorés : liens dans un paragraphe de texte courant, éléments invisibles ou hors de la page (lien d'évitement au repos).
// Cases et boutons radio : on mesure leur étiquette (<label>), qui est la zone cliquable, s'ils en ont une.
import { BASE, PAGES, NAVIGATEUR, lancer } from './commun.mjs';

const LARGEURS = [320, 390];
const MIN = 44;

function mesurer(min) {
  const nom = (e) => `${e.tagName.toLowerCase()}${e.id ? '#' + e.id : ''} « ${(e.textContent || e.name || e.type || '').trim().replace(/\s+/g, ' ').slice(0, 30)} »`;
  const cibles = [...document.querySelectorAll('a[href], button, input:not([type=hidden]), select, textarea')]
    .filter((e) => {
      if (e.tagName === 'A') {
        const p = e.closest('p');
        if (p && p.textContent.trim().length > e.textContent.trim().length) return false; // lien dans du texte courant
      }
      return true;
    })
    .map((e) => (['checkbox', 'radio'].includes(e.type) && e.labels?.length ? e.labels[0] : e));
  const resultats = [];
  for (const e of new Set(cibles)) {
    const r = e.getBoundingClientRect(), cs = getComputedStyle(e);
    if (r.width === 0 || r.height === 0 || cs.visibility !== 'visible' || r.right + scrollX <= 0 || r.bottom + scrollY <= 0) continue;
    resultats.push({ ok: r.width >= min && r.height >= min, extrait: `${nom(e)} ${Math.round(r.width)}×${Math.round(r.height)}` });
  }
  return resultats;
}

const navigateur = await lancer();
const version = navigateur.version();
const page = await navigateur.newPage();
const echecs = [];
let testees = 0;
for (const p of PAGES) {
  for (const l of LARGEURS) {
    await page.setViewportSize({ width: l, height: 900 });
    await page.goto(BASE + p);
    for (const r of await page.evaluate(mesurer, MIN)) {
      testees++;
      if (!r.ok) echecs.push(`${p} à ${l} px : ${r.extrait}`);
    }
  }
}
await navigateur.close();

console.log(`${PAGES.length} pages × ${LARGEURS.length} largeurs, ${testees} cibles mesurées (${NAVIGATEUR} ${version})`);
console.log(echecs.length ? `Sous ${MIN} × ${MIN} px (${echecs.length}) :\n${echecs.join('\n')}` : `Aucune cible sous ${MIN} × ${MIN} px.`);
process.exitCode = echecs.length ? 1 : 0;

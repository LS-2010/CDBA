// Contraste du texte visible contre son fond (WCAG 1.4.3) : 4,5:1, ou 3:1 pour le gros texte (≥ 24 px, ou ≥ 18,66 px en gras).
// Couleurs calculées par le navigateur ; fonds semi-transparents composés jusqu'au premier fond opaque.
// Fond image ou dégradé sur le chemin : on ne devine pas, l'élément est classé « indéterminé ». Mesuré à 375 et 1280 px.
import { BASE, PAGES, NAVIGATEUR, lancer } from './commun.mjs';

const LARGEURS = [375, 1280];

function mesurer() {
  const rgba = (s) => { const v = s.match(/[\d.]+/g)?.map(Number) || [0, 0, 0, 0]; return [v[0], v[1], v[2], v[3] ?? 1]; };
  const sur = (haut, bas) => [0, 1, 2].map((i) => haut[i] * haut[3] + bas[i] * (1 - haut[3])).concat(1);
  const lum = (c) => {
    const v = c.slice(0, 3).map((x) => { x /= 255; return x <= 0.04045 ? x / 12.92 : ((x + 0.055) / 1.055) ** 2.4; });
    return 0.2126 * v[0] + 0.7152 * v[1] + 0.0722 * v[2];
  };
  // Fond derrière el : couches du plus proche au plus lointain ; null si une image ou un dégradé intervient.
  const fond = (el) => {
    const couches = [];
    for (let e = el; e; e = e.parentElement) {
      const cs = getComputedStyle(e);
      if (cs.backgroundImage !== 'none') return null;
      const c = rgba(cs.backgroundColor);
      if (c[3] > 0) couches.push(c);
      if (c[3] >= 1) break;
    }
    return couches.reverse().reduce((bas, haut) => sur(haut, bas), [255, 255, 255, 1]); // fond du canevas : blanc
  };
  const nom = (el) => `${el.tagName.toLowerCase()}${el.id ? '#' + el.id : ''}${el.classList.length ? '.' + [...el.classList].join('.') : ''}`;

  const resultats = [];
  const vus = new Set();
  const marcheur = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  while (marcheur.nextNode()) {
    const n = marcheur.currentNode, el = n.parentElement, texte = n.textContent.trim();
    if (!texte || vus.has(el) || ['SCRIPT', 'STYLE', 'NOSCRIPT'].includes(el.tagName)) continue;
    const plage = document.createRange(); plage.selectNodeContents(n);
    const r = plage.getBoundingClientRect();
    // Invisible : sans taille, hors de la page (lien d'évitement au repos), masqué ou transparent.
    if (r.width < 2 || r.height < 2 || r.right + scrollX <= 0 || r.bottom + scrollY <= 0) continue;
    const cs = getComputedStyle(el);
    if (cs.visibility !== 'visible') continue;
    let opaque = true;
    for (let e = el; e; e = e.parentElement) if (getComputedStyle(e).opacity === '0') { opaque = false; break; }
    if (!opaque) continue;
    vus.add(el);
    const taille = parseFloat(cs.fontSize), gras = parseInt(cs.fontWeight, 10) >= 700;
    const seuil = taille >= 24 || (taille >= 18.66 && gras) ? 3 : 4.5;
    const f = fond(el);
    const extrait = `${nom(el)} « ${texte.slice(0, 40)} »`;
    if (!f) { resultats.push({ etat: 'indetermine', extrait }); continue; }
    const t = sur(rgba(cs.color), f);
    const a = lum(t), b = lum(f);
    const ratio = (Math.max(a, b) + 0.05) / (Math.min(a, b) + 0.05);
    resultats.push({ etat: ratio < seuil ? 'echec' : 'ok', extrait: `${extrait} ${ratio.toFixed(2)}:1 (seuil ${seuil}:1)` });
  }
  return resultats;
}

const navigateur = await lancer();
const version = navigateur.version();
const page = await navigateur.newPage();
const echecs = new Set(), indetermines = new Set();
let testes = 0;
for (const p of PAGES) {
  for (const l of LARGEURS) {
    await page.setViewportSize({ width: l, height: 900 });
    await page.goto(BASE + p);
    for (const r of await page.evaluate(mesurer)) {
      testes++;
      if (r.etat === 'echec') echecs.add(`${p} : ${r.extrait}`);
      if (r.etat === 'indetermine') indetermines.add(`${p} : ${r.extrait}`);
    }
  }
}
await navigateur.close();

console.log(`${PAGES.length} pages × ${LARGEURS.length} largeurs, ${testes} éléments de texte mesurés (${NAVIGATEUR} ${version})`);
console.log(echecs.size ? `Échecs (${echecs.size}) :\n${[...echecs].join('\n')}` : 'Échecs : aucun.');
console.log(indetermines.size ? `Indéterminés, fond image ou dégradé (${indetermines.size}) :\n${[...indetermines].join('\n')}` : 'Indéterminés : aucun.');
process.exitCode = echecs.size ? 1 : 0;

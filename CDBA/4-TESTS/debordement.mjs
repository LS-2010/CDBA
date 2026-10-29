// Défilement horizontal : chaque page, de 320 à 5120 px de large. Repris de l'audit des phases 3 à 9.
import { BASE, PAGES, NAVIGATEUR, lancer } from './commun.mjs';

const LARGEURS = [320, 375, 414, 768, 1024, 1280, 1920, 2560, 3840, 5120];

const navigateur = await lancer();
const version = navigateur.version();
const page = await navigateur.newPage();
const debordements = [];
for (const p of PAGES) {
  for (const l of LARGEURS) {
    await page.setViewportSize({ width: l, height: 900 });
    await page.goto(BASE + p);
    const d = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
    if (d > 0) debordements.push(`${p} à ${l} px : ${d} px de trop`);
  }
}
await navigateur.close();

console.log(`${PAGES.length} pages × ${LARGEURS.length} largeurs (${NAVIGATEUR} ${version})`);
console.log(debordements.length ? debordements.join('\n') : 'Aucun défilement horizontal.');
process.exitCode = debordements.length ? 1 : 0;

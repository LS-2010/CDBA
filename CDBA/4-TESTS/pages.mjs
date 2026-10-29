// Chaque page : erreurs et avertissements de console, erreurs JavaScript, ressources en erreur (404 et autres) ou injoignables.
import { BASE, PAGES, NAVIGATEUR, lancer } from './commun.mjs';

const navigateur = await lancer();
const version = navigateur.version();
const page = await navigateur.newPage();
const problemes = [];
let courante = '';
page.on('console', (m) => { if (m.type() === 'error' || m.type() === 'warning') problemes.push(`${courante} : console ${m.type()} : ${m.text()}`); });
page.on('pageerror', (e) => problemes.push(`${courante} : erreur JavaScript : ${e.message}`));
page.on('response', (r) => { if (r.status() >= 400) problemes.push(`${courante} : ${r.status()} ${r.url()}`); });
page.on('requestfailed', (r) => problemes.push(`${courante} : échec ${r.url()} (${r.failure()?.errorText})`));

for (const p of PAGES) {
  courante = p;
  await page.goto(BASE + p, { waitUntil: 'networkidle' });
}
await navigateur.close();

console.log(`${PAGES.length} pages chargées (${NAVIGATEUR} ${version}) : ${PAGES.join(', ')}`);
console.log(problemes.length ? problemes.join('\n') : 'Aucune erreur de console, aucune ressource en erreur.');
process.exitCode = problemes.length ? 1 : 0;

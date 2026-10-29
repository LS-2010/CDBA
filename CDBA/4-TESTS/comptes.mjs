// Comptes de démonstration : chaque compte lu dans 3-CODE-SITE/js/demo-comptes.js se connecte sur /connexion/
// et arrive sur son espace ; un mauvais code est refusé (on reste sur /connexion/, message d'erreur, champ vidé).
// Les codes ne sont jamais affichés.
import fs from 'node:fs';
import { BASE, NAVIGATEUR, lancer } from './commun.mjs';

const source = fs.readFileSync(new URL('../3-CODE-SITE/js/demo-comptes.js', import.meta.url), 'utf8');
const COMPTES = [...source.matchAll(/(\w+):\s*\{\s*code:\s*'([^']*)',\s*page:\s*'([^']*)'\s*\}/g)]
  .map(([, identifiant, code, cible]) => ({ identifiant, code, cible }));
if (!COMPTES.length) throw new Error('Aucun compte lu dans 3-CODE-SITE/js/demo-comptes.js (format changé ?)');

const CONNEXION = new URL('connexion/', BASE).href;
const navigateur = await lancer();
const version = navigateur.version();
const page = await navigateur.newPage();
const problemes = [];
page.on('pageerror', (e) => problemes.push(`erreur JavaScript : ${e.message}`));

async function connecter(identifiant, code) {
  await page.goto(CONNEXION);
  await page.fill('#identifiant', identifiant);
  await page.fill('#mot-de-passe', code);
  await page.click('#formulaire-connexion button[type=submit]');
  await page.waitForLoadState('load');
}

for (const { identifiant, code, cible } of COMPTES) {
  const attendu = new URL(cible, CONNEXION).pathname;
  await connecter(identifiant, code);
  await page.waitForURL((u) => u.pathname === attendu, { timeout: 5000 }).catch(() => {});
  const arrivee = new URL(page.url()).pathname;
  if (arrivee !== attendu) problemes.push(`${identifiant} : arrivé sur ${arrivee}, attendu ${attendu}`);
  console.log(`${identifiant} : bon code → ${arrivee}`);

  await connecter(identifiant, code + '-faux');
  const reste = new URL(page.url()).pathname === new URL(CONNEXION).pathname;
  const message = await page.locator('#erreur-mot-de-passe:not([hidden])').count();
  const vide = (await page.inputValue('#mot-de-passe')) === '';
  if (!reste || !message || !vide) problemes.push(`${identifiant} : mauvais code mal refusé (reste ${reste}, message ${Boolean(message)}, champ vidé ${vide})`);
  console.log(`${identifiant} : mauvais code → ${reste ? 'refusé' : 'ACCEPTÉ'}`);
}
await navigateur.close();

console.log(`${COMPTES.length} comptes (${NAVIGATEUR} ${version})`);
console.log(problemes.length ? problemes.join('\n') : 'Comptes : aucun problème.');
process.exitCode = problemes.length ? 1 : 0;

// Niveaux et dates : la section « Niveaux » (13 plongée, 10 apnée) est absente de l'accueil et visible après
// connexion côté moniteur et administrateur ; l'administrateur modifie une date en mémoire, sans cookie ni stockage,
// la modification disparaît au rechargement et les dates de l'accueil ne changent pas.
import fs from 'node:fs';
import { BASE, NAVIGATEUR, lancer } from './commun.mjs';

const source = fs.readFileSync(new URL('../3-CODE-SITE/js/demo-comptes.js', import.meta.url), 'utf8');
const code = (id) => source.match(new RegExp(`${id}:\\s*\\{\\s*code:\\s*'([^']*)'`))?.[1];

const navigateur = await lancer();
const version = navigateur.version();
const page = await navigateur.newPage();
const problemes = [];
page.on('console', (m) => { if (m.type() === 'error' || m.type() === 'warning') problemes.push(`console ${m.type()} : ${m.text()}`); });
page.on('pageerror', (e) => problemes.push(`erreur JavaScript : ${e.message}`));
const verifier = (ok, texte) => { if (!ok) problemes.push(texte); };

await page.goto(BASE);
verifier(!(await page.locator('#titre-niveaux, .groupes-niveaux').count()), 'accueil : section Niveaux encore présente');
const datesAccueil = await page.locator('.horaires tbody th').allTextContents();

for (const id of ['paul', 'sophie']) {
  await page.goto(new URL('connexion/', BASE).href);
  await page.fill('#identifiant', id);
  await page.fill('#mot-de-passe', code(id));
  await page.click('#formulaire-connexion button[type=submit]');
  await page.waitForURL(/espace-(moniteur|admin)-demo/, { timeout: 5000 }).catch(() => {});
  const titre = page.locator('h2#titre-niveaux');
  verifier(await titre.isVisible() && (await titre.textContent()) === 'Niveaux', `${id} : titre « Niveaux » non visible (${page.url()})`);
  const n = await page.locator('.groupes-niveaux ul').evaluateAll((uls) => uls.map((u) => u.children.length));
  verifier(n.join() === '13,10', `${id} : listes de niveaux ${n.join(', ')} au lieu de 13, 10`);
  console.log(`${id} : Niveaux ${n.join(' + ')}`);
}

// Administrateur (dernière page ouverte) : 6 décembre 2026 (plongée) → 13 décembre 2026.
await page.selectOption('#date-a-modifier', { label: 'Plongée, dimanche 6 décembre 2026' });
await page.fill('#nouvelle-date', '2026-12-13');
await page.click('#modifier-date');
const ligne = await page.locator('tr[data-date="2026-12-13"] th').textContent();
verifier(ligne === 'Dimanche 13 décembre 2026', `admin : ligne modifiée « ${ligne} »`);
verifier(!(await page.locator('tr[data-date="2026-12-06"]').count()), 'admin : ancienne date encore affichée');
await page.fill('#nouvelle-date', '');
await page.click('#modifier-date');
verifier(await page.locator('#erreur-date').isVisible(), 'admin : date vide acceptée');
const stockage = await page.evaluate(() => localStorage.length + sessionStorage.length + document.cookie.length);
verifier(stockage === 0 && !(await page.context().cookies()).length, 'admin : cookie ou stockage utilisé');
await page.reload();
verifier(await page.locator('tr[data-date="2026-12-06"]').count() === 1, 'admin : modification conservée après rechargement');

await page.goto(BASE);
verifier((await page.locator('.horaires tbody th').allTextContents()).join() === datesAccueil.join(), 'accueil : dates changées');
await navigateur.close();

console.log(`Espaces (${NAVIGATEUR} ${version})`);
console.log(problemes.length ? problemes.join('\n') : 'Espaces : aucun problème.');
process.exitCode = problemes.length ? 1 : 0;

// Partagé par les tests : navigateur, adresse du serveur local et liste des pages, lue dans 3-CODE-SITE/ (une page ajoutée est testée d'office).
import fs from 'node:fs';
import * as playwright from 'playwright';

export const NAVIGATEUR = process.env.NAVIGATEUR || 'chromium';
if (!['chromium', 'firefox'].includes(NAVIGATEUR)) throw new Error(`NAVIGATEUR=${NAVIGATEUR} : chromium ou firefox`);
export const lancer = () => playwright[NAVIGATEUR].launch();

export const BASE = process.env.BASE || 'http://127.0.0.1:8091/';
const SITE = new URL('../3-CODE-SITE/', import.meta.url);

export const PAGES = fs.readdirSync(SITE, { withFileTypes: true }).flatMap((e) => {
  if (e.isFile() && e.name.endsWith('.html')) return [e.name];
  if (e.isDirectory() && fs.existsSync(new URL(`${e.name}/index.html`, SITE))) return [`${e.name}/`];
  return [];
}).sort();

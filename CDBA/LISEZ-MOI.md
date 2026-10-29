# CDBA — site de la section plongée (maquette)

Site statique de la section plongée et apnée du Club Défense Balard Arcueil
(CDBA) : dates des fosses, lieu, horaires, tarifs, inscription, pages légales
**provisoires**, et **maquette** des espaces adhérent, moniteur et
administrateur. Ce n'est pas la version finale. Rien n'est en ligne.

Pour commencer : `5-DOCS/00-COMPRENDRE.md` (le projet en une page).

## Dossiers

| Dossier | Ce que c'est |
|---------|--------------|
| **`1-DEMO/`** | **Démo** pour GitHub Pages, générée depuis `3-CODE-SITE/` : bannière « Version de démonstration », `noindex, nofollow`, `robots.txt` qui bloque tout. |
| **`2-CODE-PYTHON/`** | **Python** (bibliothèque standard seulement) : `copie-publique.py` fabrique `1-DEMO/`, `poc-hors-ligne.py` fabrique `6-ZIP/CDBA-POC.zip`. |
| **`3-CODE-SITE/`** | **Le site : HTML, CSS et JavaScript.** Pages HTML, `css/style.css`, `img/`, fichiers de serveur (`_headers`, `.htaccess`, `robots.txt`, `sitemap.xml`). **JavaScript** dans `js/` : `demo-comptes.js` (connexion fictive), `encadrement.js` (espaces moniteur et administrateur), `dates-fosses.js` (dates modifiables, administrateur), `inscription.js` (vérification du formulaire). Sans framework ni étape de construction. |
| **`4-TESTS/`** | **JavaScript des tests** : sept scripts Playwright (`*.mjs`), `package.json`, mode d'emploi dans `4-TESTS/README.md`. |
| **`5-DOCS/`** | Documents numérotés dans l'ordre de rédaction (rapports de phase, charte, conformité, comptes de démo, fonctionnalités 20, authentification 13, données 22…) et `legal-brouillons/` (brouillons juridiques, lire `5-DOCS/legal-brouillons/LISEZ-MOI.md` avant tout usage). |
| **`6-ZIP/`** | **`CDBA-POC.zip`** : le site hors ligne, à décompresser puis ouvrir par double-clic. Et `CDBA-SAUVEGARDE-HISTORIQUE.zip` : sauvegarde du dépôt de travail, **privée, jamais publiée** (exclue de git). |
| **`7-PRIVE/`** | **Privé, jamais publié** : le dépôt de travail avec son historique (exclu de git). |

## Ouvrir le site

- **Sans rien installer** : décompresser `6-ZIP/CDBA-POC.zip`, ouvrir le
  dossier `CDBA-POC`, double-cliquer sur `index.html`.
- **Serveur local** (depuis ce dossier) :

  ```sh
  python3 -m http.server 8091 --bind 127.0.0.1 --directory 3-CODE-SITE
  ```

  puis ouvrir http://127.0.0.1:8091 (arrêt : Ctrl+C). Les en-têtes de
  `_headers` et `.htaccess` ne sont **pas** appliqués par `http.server` ; la
  CSP est aussi présente en `<meta>` dans les pages.

Régénérer la démo et le POC (depuis ce dossier) :
`python3 -I 2-CODE-PYTHON/copie-publique.py 1-DEMO` et
`python3 -I 2-CODE-PYTHON/poc-hors-ligne.py 6-ZIP/CDBA-POC.zip`. Les deux
scripts contiennent leurs propres contrôles (`assert`).

## Comptes de démonstration (fictifs)

Sur `3-CODE-SITE/connexion/` : `marie` (adhérente), `paul` (moniteur),
`sophie` (administratrice). Codes et retrait : `3-CODE-SITE/js/demo-comptes.js`
et `5-DOCS/16-COMPTES-DEMO.md`. Ce n'est **pas** une authentification : les
codes sont lisibles dans le code source et chaque espace s'ouvre directement
par son adresse.

## Ce qui est simulé

- Les personnes, dossiers, inscrits, fiches et palanquées sont des données
  **EXEMPLE** écrites dans les pages.
- Rien n'est envoyé ni stocké (ni cookie, ni stockage local). Rôles,
  forfaits, palanquées et dates des fosses (administrateur) ne vivent qu'en
  mémoire jusqu'au rechargement ; l'accueil garde les dates du fichier source.
- Les formulaires vérifient les champs mais n'envoient rien ; certains
  boutons sont volontairement inactifs.

## Ce qui reste à construire

- **API côté serveur** : aucune n'existe. Besoins et statut par
  fonctionnalité : `5-DOCS/20-CR-FONCTIONNALITES.md`.
- **Vraie authentification** : `5-DOCS/13-VRAIE-AUTHENTIFICATION.md`.
- **Base de données** (données, qui les saisit, qui y accède, durées) :
  `5-DOCS/22-INVENTAIRE-DONNEES.md`. Les droits par rôle devront être
  vérifiés côté serveur : une page cachée ne protège rien.
- Avant toute mise en ligne : retirer les comptes de démonstration
  (`5-DOCS/16-COMPTES-DEMO.md`), la maquette (`5-DOCS/09-RETIRER-MAQUETTE.md`),
  la mention provisoire (`5-DOCS/14-RETIRER-VERSION-PROVISOIRE.md`), et suivre
  la liste « avant mise en ligne » de `5-DOCS/12-CONFORMITE.md`.

## Tests

Sept tests Playwright (Chromium ou Firefox) : défilement horizontal de 320 à
5120 px, erreurs de console et ressources en erreur, clavier, comptes de
démo, contraste, cibles tactiles, section « Niveaux » et dates de
l'administrateur. Installation et lancement : `4-TESTS/README.md`.

## Points connus

- **Marqueurs ouverts** : de nombreux `[À CONFIRMER]`, `[À COMPLÉTER]` et
  `[À VÉRIFIER]` dans `3-CODE-SITE/` et `5-DOCS/`. Ils attendent des réponses
  du club ; aucun n'a été comblé par une valeur inventée.
- **Pages légales provisoires** : `3-CODE-SITE/mentions-legales.html`
  contient encore 8 marqueurs [À CONFIRMER] (dont l'adresse e-mail du club) ;
  confidentialité et conditions à valider.
- **Safari / WebKit non testé** : chargé une fois dans Safari 26.6.1 en HTTPS
  local, rendu non regardé, connexion non essayée. Non testés non plus : vrai
  iPhone, vrai Android, Samsung Internet, VoiceOver, TalkBack, Microsoft
  Edge, Windows, Linux, ChromeOS, mode contraste élevé (`forced-colors`).
- **Domaine inconnu** : `domaine-a-confirmer.example` sert de remplissage dans
  `sitemap.xml` et `robots.txt` ; la canonique est relative.
- **Forfait** : incohérence « toutes les fosses » / « 5 fosses » à trancher
  par le club. Lieu de l'apnée absent ; année d'une date d'apnée (6 juin) à
  vérifier sur cdba.club.
- **Droits** du logo et de la photo de la murène : à confirmer par écrit.
- **Documentation** : deux documents portent le numéro 17, il n'y a pas de 21
  [À CONFIRMER]. Le document 19 (audit de sécurité), les captures avant/après
  et la photo d'origine ne sont pas inclus ; des renvois vers eux subsistent
  dans `3-CODE-SITE/_headers`, `3-CODE-SITE/.htaccess` et
  `5-DOCS/08-RAPPORT-PHASE-3.md`.

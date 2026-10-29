# Tests automatiques (Playwright, Chromium et Firefox)

Sept scripts, reconstitués à partir de l'audit écrit pendant les phases 3 à 9
(le script d'origine n'avait pas été versionné).

| Script | Ce qu'il vérifie | Échoue si |
|--------|------------------|-----------|
| `debordement.mjs` | Chaque page à 320, 375, 414, 768, 1024, 1280, 1920, 2560, 3840 et 5120 px de large : `scrollWidth − clientWidth` de la page. | une page défile horizontalement à une largeur (page, largeur et pixels en trop affichés). |
| `pages.mjs` | Chaque page chargée jusqu'au repos du réseau : erreurs et avertissements de console, erreurs JavaScript, réponses HTTP ≥ 400 (dont 404), requêtes qui échouent. | au moins un problème (page et URL affichées). |
| `clavier.mjs` | Chaque page à 1280 px : Tab jusqu'à revenir au premier élément ou sortir de la page. Contour de focus visible (`outline`) sur chaque élément atteint ; le parcours reboucle (pas de piège) ; ordre du Tab identique à l'ordre du document ; lien d'évitement atteint en premier, avec une cible présente. | un élément sans contour, un parcours qui ne reboucle pas, un ordre inversé, un lien d'évitement absent en tête ou sans cible. |
| `comptes.mjs` | Les comptes de démonstration sont lus dans `3-CODE-SITE/js/demo-comptes.js` au moment du test (aucun code dans le script ni dans la sortie). Pour chacun, sur `/connexion/` : le bon code mène à son espace (adhérent, moniteur, administrateur) ; un mauvais code est refusé (on reste sur la page, message d'erreur, champ vidé). | une mauvaise destination, un mauvais code accepté, une erreur JavaScript. |
| `contraste.mjs` | Chaque texte visible, à 375 et 1280 px : couleurs calculées par le navigateur, fonds semi-transparents composés jusqu'au premier fond opaque, rapport WCAG. Seuil 4,5:1, ou 3:1 pour le gros texte (≥ 24 px, ou ≥ 18,66 px en gras). Fond image ou dégradé : classé **indéterminé** et listé à part, sans deviner. | un texte sous son seuil (les indéterminés ne font pas échouer). |
| `cibles.mjs` | Liens, boutons et champs visibles, à 320 et 390 px : taille d'au moins 44 × 44 px. Les cases et boutons radio sont mesurés par leur étiquette (zone cliquable). Les liens dans un paragraphe de texte courant sont ignorés. | une cible sous 44 × 44 px. |
| `espaces.mjs` | Accueil sans section « Niveaux » ; après connexion (paul, sophie), titre « Niveaux » visible et listes de 13 et 10 niveaux ; côté administrateur, une date modifiée s'affiche, une date vide est refusée, aucun cookie ni stockage, la modification disparaît au rechargement ; dates de l'accueil inchangées. | Un de ces points manque, ou erreur de console ou JavaScript. |

Les pages sont lues dans `3-CODE-SITE/` : tous les `*.html` de la racine et chaque
dossier qui contient un `index.html` (11 pages aujourd'hui). Une page ajoutée
est donc testée sans modifier les scripts. Code de sortie : 0 si tout va bien,
1 sinon.

## Installer (une fois)

Il faut Node.js 18 ou plus récent (vérifié avec Node 24), puis :

```sh
cd 4-TESTS
npm install
npx playwright install chromium
npx playwright install firefox
```

Playwright est figé en 1.63.0, la version utilisée pendant les phases.

## Lancer

Dans un premier terminal, à la racine du dépôt (le serveur n'écoute que sur
127.0.0.1) :

```sh
python3 -m http.server 8091 --bind 127.0.0.1 --directory 3-CODE-SITE
```

Dans un second :

```sh
node 4-TESTS/debordement.mjs
node 4-TESTS/pages.mjs
node 4-TESTS/clavier.mjs
node 4-TESTS/comptes.mjs
node 4-TESTS/contraste.mjs
node 4-TESTS/cibles.mjs
node 4-TESTS/espaces.mjs
```

Navigateur : Chromium par défaut. Pour Firefox, préfixer la commande :
`NAVIGATEUR=firefox node 4-TESTS/clavier.mjs` (valeurs acceptées : `chromium`,
`firefox`). Depuis `4-TESTS/`, `npm run firefox:clavier` (et de même pour
`debordement`, `pages`, `comptes`) fait la même chose.

Pour tester une autre adresse (par exemple la copie publique servie dans un
sous-dossier) : `BASE=http://127.0.0.1:8092/cdba-demo/ node 4-TESTS/pages.mjs`.
Arrêt du serveur : Ctrl+C.

## Résultat au 27 octobre 2026

Chromium 153, une exécution : 11 pages × 10 largeurs, aucun défilement
horizontal ; 11 pages, aucune erreur de console, aucune ressource en erreur ;
clavier : 11 pages, 9 à 30 éléments atteints par page, aucun problème
(l'ancien audit annonçait « 40 à 45 » parce qu'il comptait 45 Tab, retours au
début compris) ; comptes : 3 comptes, bonne destination, mauvais code refusé.

Le piège au clavier, l'ordre du Tab et le lien d'évitement sont des contrôles
ajoutés : l'ancien audit ne vérifiait que le contour de focus.

Firefox 155, une exécution par script : mêmes résultats que Chromium
(aucun défilement, aucune erreur de page, clavier identique page par page,
3 comptes corrects).

Contraste et cibles (Chromium 153, une exécution) : 1 690 textes mesurés,
aucun échec ; 314 cibles mesurées, aucune sous 44 × 44 px. 29 textes
indéterminés (fond image ou dégradé) : les titres `h1#titre-page` de chaque
page et les chapeaux et encarts « Maquette » qui les accompagnent, le bloc
« Prochaine fosse » de l'espace adhérent, et trois textes de l'accueil. Ils
sont à vérifier à l'œil ou au pire pixel, comme pendant la phase 5. Pas encore
lancés sous Firefox.

Différence de mesure : après le dernier élément, Chromium envoie le focus
hors de la page (`activeElement` = `body`), alors que Firefox sous Playwright
le laisse sur le dernier élément. `clavier.mjs` considère donc la fin de page
atteinte quand le focus ne bouge plus **et** que l'élément est le dernier
tabulable du document. Un focus bloqué ailleurs reste signalé comme piège.
Limite : sous Firefox, un piège sur le tout dernier élément ne serait pas
distingué de la fin de page ; Chromium, lui, le détecterait.

## Ce qui n'a PAS été repris (à écrire)

Ces contrôles existaient dans l'audit des phases précédentes (résultats dans
`5-DOCS/11-RAPPORT-PHASE-5.md` et `5-DOCS/17-BILAN-V1.md`) mais ne sont pas ici :

- **WebKit/Safari**, jamais testé : le WebKit de Playwright 1.63 n'est pas
  compatible avec macOS 14 (`5-DOCS/11-RAPPORT-PHASE-5.md`).
- **Lighthouse** (performance, accessibilité, bonnes pratiques, SEO).
- **Contraste sur image ou dégradé** (les « indéterminés ») et texte placé
  par-dessus un élément voisin (position absolue) : `contraste.mjs` ne regarde
  que les fonds des ancêtres. Ni les états survol et focus, ni les panneaux
  masqués des espaces de démonstration, ni les bordures de champs (1.4.11).
- Hiérarchie des titres, images sans `alt`, styles ou scripts en ligne.
- **Texte agrandi à 200 %** (320 à 768 px).
- **Connexion, cas restants** : champs vides, identifiant inconnu, focus
  après erreur.
- **Clavier au téléphone** et lecteurs d'écran (VoiceOver, TalkBack).
- **Formulaires** (erreurs par champ, aucune requête envoyée), cookies et
  stockage, requêtes vers d'autres domaines, ouverture en `file://`,
  appareils simulés, captures d'écran.

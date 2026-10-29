# Rapport de phase 7 : comptes de démonstration et copie publique

Tag : `depart-phase7`. Rien n'a été poussé ni publié.

## Fait

| Commit | Thème |
|--------|-------|
| `877e172` | A. Trois comptes fictifs (Marie adhérent, Paul moniteur, Sophie administrateur), script externe unique `3-CODE-SITE/js/demo-comptes.js`, CSP inchangée, bandeau et liste des comptes sur `/connexion/`, message d'erreur générique, `5-DOCS/16`, `5-DOCS/09` et liste « avant mise en ligne » à jour. |
| `7f80470` | B. `/espace-moniteur-demo/` et `/espace-admin-demo/` (données EXEMPLE, « Maquette : fonctions à définir avec le club », formulaire « Créer un compte » inactif, emplacements paiements et e-mails inactifs) ; l'espace adhérent affiche Marie. |
| copie (`8ab54cc`) | C. `CDBA/1-DEMO`, voir `17-COPIE-PUBLIQUE-GITHUB.md`. |

## Contrôles (Chromium 153, Firefox 155, 11 pages)

Site principal (http://127.0.0.1:8091/) **et** copie servie dans un
sous-dossier (http://127.0.0.1:8092/cdba-demo/), mêmes résultats :

- défilement horizontal de 320 à 5120 px : aucun ; texte à 200 % (320, 375,
  414 et 768 px, 11 pages) : aucun débordement ;
- contrastes, cibles < 44 px, images sans `alt`, styles et scripts en ligne :
  0 défaut (Chromium, 375 et 1280 px) ;
- clavier : 40 à 45 éléments atteints par page, 0 sans contour de focus ;
  console : 0 erreur ;
- comptes, 7 cas par navigateur : les 3 bons comptes arrivent sur la bonne
  page ; mauvais mot de passe et mot de passe d'un autre compte donnent le
  message générique, focus sur le mot de passe ; champs vides : erreur sous
  chaque champ vide ;
- cookies : 0 ; `localStorage`, `sessionStorage` et IndexedDB vides sur les
  11 pages ; requêtes vers un autre domaine : 0 ;
- liens et ressources (pages, CSS, JS, images) : tous en 200, y compris
  dans le sous-dossier ;
- 12 appareils simulés : 0 débordement, 0 cible < 44 px.

Incident : le premier lancement pour la copie a en réalité retesté le site
principal (variable vide à cause du découpage des mots dans zsh). La suite a
été relancée une fois pour la copie, avec l'adresse en clair.

Safari 26.6.1, en HTTPS local (certificat mkcert de `~/cdba-certs`, hors des
dépôts) : la copie, servie à https://localhost:8444/cdba-demo/, a été chargée
par Safari. Le journal du serveur porte l'identifiant de Safari, toutes les
pages et ressources ont répondu 200, et les titres d'onglet sont corrects.
Le rendu n'a pas été vu (pas d'autorisation de capture d'écran), et la
connexion par formulaire n'a pas été essayée dans Safari.

## Non vérifié

- Rendu visuel dans Safari ; connexion des trois comptes dans Safari ;
  vrais téléphones ; lecteurs d'écran.
- Publication réelle sur GitHub Pages (rien n'a été poussé).

## Encore à vous

- Droits du logo (marque de la Fédération) et de la photo de la murène,
  inclus dans la copie publique alors qu'ils sont [À CONFIRMER].
- Validation du contenu par le club (pages légales provisoires, champs
  [À CONFIRMER] et [À COMPLÉTER]).
- La copie est destinée à un dépôt **public** : tout son contenu, y compris
  les comptes fictifs et leurs mots de passe, sera visible par tous.

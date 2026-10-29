# Comprendre le projet en une page

## À quoi sert ce projet

Maquette du site de la section plongée et apnée du Club Défense Balard
Arcueil (CDBA) : dates des fosses du dimanche (UCPA Aqua92), infos pratiques,
tarifs, inscription, pages légales **provisoires**, et maquettes des espaces
adhérent, moniteur et administrateur. Ce n'est pas la version finale et rien
n'est en ligne. Hébergement et date de mise en ligne : [À CONFIRMER].

## Ce qu'il y a dans chaque dossier

| Dossier | Contenu |
|---------|---------|
| `3-CODE-SITE/` | Le site : pages HTML, `css/`, `js/`, `img/`, fichiers de serveur (`_headers`, `.htaccess`, `robots.txt`, `sitemap.xml`). Pas de framework ni d'étape de construction. |
| `3-CODE-SITE/connexion/` | Connexion de la maquette (comptes fictifs). |
| `3-CODE-SITE/espace-demo/`, `3-CODE-SITE/espace-moniteur-demo/`, `3-CODE-SITE/espace-admin-demo/` | Espaces adhérent, moniteur et administrateur (maquettes). |
| `1-DEMO/` | Démo pour GitHub Pages, générée depuis `3-CODE-SITE/` (bannière, `noindex`, `robots.txt` qui bloque tout). |
| `6-ZIP/` | `CDBA-POC.zip` : le site hors ligne, à ouvrir sans serveur. |
| `2-CODE-PYTHON/` | Deux scripts Python (bibliothèque standard) : copie publique de démonstration, archive hors ligne. |
| `4-TESTS/` | Sept tests Playwright ; mode d'emploi dans `4-TESTS/README.md`. |
| `5-DOCS/` | Cette page et les documents de travail numérotés (dont 13, 20 et 22, voir plus bas). |
| `5-DOCS/legal-brouillons/` | Brouillons juridiques, à faire valider [À CONFIRMER]. |
| `7-PRIVE/` | Dépôt de travail avec son historique : privé, jamais publié, exclu de git. |

## Ouvrir le site

- **Sans rien installer** : décompresser `6-ZIP/CDBA-POC.zip`, ouvrir le
  dossier `CDBA-POC`, double-cliquer sur `index.html`.
- **Serveur local** : `python3 -m http.server 8091 --bind 127.0.0.1 --directory 3-CODE-SITE`,
  puis ouvrir http://127.0.0.1:8091 (arrêt : Ctrl+C).

## Comptes de démonstration (fictifs)

Sur la page `connexion/` : `marie` (adhérente, « Mon espace »), `paul`
(moniteur), `sophie` (administratrice). Les codes sont écrits dans
`3-CODE-SITE/js/demo-comptes.js`. Ce n'est **pas** une authentification : les codes
sont lisibles dans le code source et chaque espace s'ouvre directement par
son adresse.

## Ce qui est simulé

- Toutes les personnes, inscriptions, fiches et palanquées sont des données
  **EXEMPLE** écrites dans les pages.
- Rien n'est envoyé ni stocké (ni cookie, ni stockage local). Rôles,
  forfaits, palanquées et dates des fosses (espace administrateur) changent
  en mémoire et sont perdus au rechargement ; l'accueil garde les dates du
  fichier source.
- Les formulaires vérifient les champs mais n'envoient rien ; certains
  boutons sont volontairement inactifs.
- La liste des niveaux (13 en plongée, 10 en apnée) apparaît sur la page
  d'inscription et dans les espaces moniteur et administrateur.

## Ce qui reste à construire

- **API côté serveur** : aucune n'existe. Besoins par fonctionnalité et
  statut : `5-DOCS/20-CR-FONCTIONNALITES.md`.
- **Vraie authentification** (comptes, mots de passe, sessions, limitation
  des tentatives) : `5-DOCS/13-VRAIE-AUTHENTIFICATION.md`.
- **Base de données** (quelles données, qui les saisit, qui y accède,
  durées de conservation) : `5-DOCS/22-INVENTAIRE-DONNEES.md`. Les droits par
  rôle devront être vérifiés côté serveur.
- Choix techniques (langage, hébergeur, base) : [À CONFIRMER].
- Avant toute mise en ligne : retirer les comptes et espaces de
  démonstration, compléter les pages légales et lever les nombreux
  `[À CONFIRMER]` et `[À VÉRIFIER]` du site.

Détails, réserves et points connus : `LISEZ-MOI.md`.

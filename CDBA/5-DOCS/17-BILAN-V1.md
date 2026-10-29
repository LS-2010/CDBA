# Bilan de la version 1 (21 octobre 2026)

> Ce bilan rapporte des résultats vus. Il ne conclut ni à la conformité ni à
> l'absence de défaut. Rien n'est mis en ligne.

## 1. Définition de la v1

**Dedans**

- Site public statique : accueil (dates, lieu, horaires, matériel, niveaux,
  tarifs), page Inscription informative.
- Pages légales **provisoires** : mentions légales, confidentialité,
  conditions d'inscription et d'utilisation (rétractation en
  [À CONFIRMER]), cookies, crédits.
- **Maquette** des trois espaces (adhérent, moniteur, administrateur),
  accessibles par trois comptes fictifs comparés dans le navigateur ; dossiers
  des adhérents en données EXEMPLE ; formulaire d'inscription à une fosse qui
  n'envoie rien.
- Copie de démonstration pour GitHub Pages (`CDBA/1-DEMO`),
  non poussée.

**Dehors**

- Vraie authentification (voir `13-VRAIE-AUTHENTIFICATION.md`).
- Paiement en ligne, envoi d'e-mails, téléversement de documents.
- Hébergement définitif, domaine, mise en ligne.

## 2. Exigences de départ

| Exigence | Statut | Preuve |
|----------|--------|--------|
| Mentions légales | page provisoire, incomplète | `3-CODE-SITE/mentions-legales.html` : 8 champs [À COMPLÉTER] (forme juridique, RNA/SIREN, siège, téléphone, directeur de la publication, hébergeur). |
| Politique de confidentialité | page provisoire, incomplète | `3-CODE-SITE/confidentialite.html` : données de l'inscription, identifiants fournis par l'administrateur, dossiers, données de santé, mineurs, droits, procédure de suppression ; 9 [À CONFIRMER] et 4 [À COMPLÉTER]. |
| CGV / CGU | page provisoire | `3-CODE-SITE/conditions.html` (fosses, tarifs, dossier, mineurs) ; applicabilité du Code de la consommation à une association : à confirmer (`04`, point 3). |
| Droit de rétractation | à confirmer | Paragraphe [À CONFIRMER] dans les conditions, sans rien affirmer (`04`, point 4). |
| Cookies (politique et bandeau) | vérifié par test | Page Cookies « aucun cookie ni traceur », pas de bandeau ; suite D : 0 cookie et stockages vides sur 11 pages, site et copie, Chromium et Firefox. |
| Consentement des formulaires | à valider | Pas de case de consentement dans l'espace adhérent (adhérent connecté) ; base légale [À CONFIRMER] ; 0 case précochée (test). |
| Minimisation | à valider | Le formulaire ne demande que niveau, stab, dates et « moins de 18 ans » ; option « ne conserver que le statut et la date de validité » proposée au club (`12`). |
| Audit des outils tiers | vérifié pour le site ; hébergeur à choisir | 0 requête vers un autre domaine (test) ; aucune police, aucun script ni aucune image externes (`19`). |
| Absence de dark patterns | à valider | 0 case précochée, libellés neutres ; relecture humaine à faire. |
| Absence de frais cachés | à valider | Tarifs publiés avec ce qui n'est pas compris ; montants licence et assurance [À CONFIRMER]. |
| Absence de faux avis | vérifié | Aucun avis publié. |
| Absence de promesses non prouvées | à valider | Textes limités aux faits fournis ; relecture humaine à faire. |
| Textes alternatifs | vérifié par test | 0 image sans `alt`, 11 pages, Chromium et Firefox. |
| Contraste | vérifié par test | 0 texte sous 4,5:1, 11 pages, 375 et 1280 px, Chromium et Firefox ; motif et verre calculés au pire pixel. |
| Navigation clavier | vérifié par test (Chromium, Firefox) | 40 à 45 éléments atteints par page, 0 sans contour ; Safari et lecteurs d'écran non testés. |
| Mineurs | à valider | « Moins de 18 ans » = oui : autorisation parentale obligatoire, forme [À CONFIRMER], pièce ajoutée au dossier, inscription incomplète (test Chromium et Firefox). Sources Légifrance dans `12`. |
| Lien de désinscription | non applicable | Aucun e-mail envoyé. |
| Licences | à valider | Polices système ; droits du logo et de la murène [À CONFIRMER]. |
| Suppression des données | à valider | Procédure décrite ; contact et durée de conservation [À CONFIRMER] ; bouton inactif dans la maquette. |

## 3. Résultats des tests (suite D, une fois, 21 octobre 2026)

Site principal (http://127.0.0.1:8091/) et copie dans un sous-dossier
(http://127.0.0.1:8092/cdba-demo/), Chromium 153 et Firefox 155, 11 pages :

- défilement horizontal de 320 à 5120 px : aucun ; texte à 200 % (320, 375,
  414, 768 px) : aucun débordement ;
- 88 mesures (11 pages × 2 largeurs × 2 navigateurs × 2 versions) : 0 défaut
  de contraste, de cible < 44 px, de hiérarchie de titres, de texte
  alternatif, de style ou script en ligne ;
- clavier : 0 élément sans contour ; console : 0 erreur ;
- comptes (7 cas par navigateur) : les 3 bons comptes arrivent sur leur
  espace ; mauvais mot de passe : message générique ; champs vides : erreur
  sous chaque champ ;
- cookies, stockages, requêtes tierces : 0 ; liens et ressources : tous en
  200 dans le sous-dossier ;
- 12 appareils simulés (Chromium) : 0 débordement, 0 cible < 44 px.

Écart d'outil : le script de compatibilité attendait encore le message
« inscription complète » avec « moins de 18 ans » = oui. Une vérification
directe montre le comportement voulu depuis la phase 8 (« inscription
incomplète », ligne ajoutée au dossier), dans les deux navigateurs.

Safari 26.6.1 en HTTPS local (mkcert, certificats dans `~/cdba-certs`) : le
site et la copie ont été chargés (journal du serveur, titres d'onglet),
sans avertissement de certificat. Rendu non vu, connexion non essayée.

## 4. Lighthouse 13.5 (Chromium 153), scores bruts

Charge moyenne : 8,39 au départ, 1,26 après une attente de 3 minutes, puis
de 1,9 à 8,2 pendant les mesures (le Mac n'était pas au repos pour la
seconde moitié).

| Page | Mobile | Ordinateur |
|------|--------|------------|
| Accueil | 100 / 100 / 100 / 85 | 100 / 100 / 100 / 85 |
| Inscription | 100 / 100 / 100 / 85 | 100 / 100 / 100 / 85 |
| Connexion (maquette) | 100 / 100 / 100 / 50 | 100 / 100 / 100 / 50 |
| Mentions légales | 100 / 100 / 100 / 85 | 100 / 100 / 100 / 85 |

(Performance / Accessibilité / Bonnes pratiques / SEO.) SEO à 85 : canonique
relative (domaine inconnu) et `robots.txt` illisible par Lighthouse à cause de
la CSP. SEO à 50 sur la connexion : `noindex` voulu et pas de description.

## 5. Ce qui reste

Comptage au 21 octobre 2026 (aucun supprimé, aucun comblé par une valeur
inventée) :

| Emplacement | [À CONFIRMER] | [À COMPLÉTER] |
|-------------|---------------|---------------|
| `3-CODE-SITE/` | 33 | 12 |
| copie publique | 31 | 12 |
| `5-DOCS/legal-brouillons/` | 13 | 1 |
| `5-DOCS/` (avant ce bilan) | 26 | 5 |

### Le club

- Identité de l'éditeur : forme juridique, RNA ou SIREN, siège, téléphone,
  directeur ou directrice de la publication.
- Responsable du traitement (club ou fédération), base légale, personnes
  ayant accès aux dossiers, durée de conservation, contact pour les données.
- Règles : annulation et remboursement, droit de rétractation, règlement
  intérieur, montants de la licence et de l'assurance, modalités de paiement,
  incohérence du forfait (« toutes les fosses » ou « 5 fosses »).
- Mineurs : forme de l'autorisation parentale ; articulation questionnaire de
  santé / certificat pour la plongée (avec la fédération).
- Certificats médicaux : choisir une option de conservation (`12`).
- Droits écrits du logo (marque de la Fédération) et de la photo de la murène.
- Administrateur des comptes ; confirmation de `plongee@cdba.club`.
- Validation de toutes les pages légales provisoires.

### Vous

- Décider de publier la copie (dépôt **public**), puis la pousser vous-même
  (`17-COPIE-PUBLIQUE-GITHUB.md`).
- Tester à la main : rendu et connexion dans Safari, vrai iPhone, vrai
  Android, Samsung Internet, VoiceOver et TalkBack.
- Avant toute mise en ligne réelle : retirer les comptes de démonstration
  (`16-COMPTES-DEMO.md`) et suivre la liste « avant mise en ligne » (`12`).
- Choisir le domaine (remplacer `domaine-a-confirmer.example`).
- Retirer le certificat racine mkcert des téléphones après les tests.

### L'hébergeur (à choisir)

- Nom, adresse et téléphone pour les mentions légales.
- HTTPS, puis HSTS ; prise en charge des en-têtes (`_headers` ou `.htaccess`).
- Contrat de sous-traitance RGPD, localisation des données.
- Plus tard : service ou serveur d'authentification.

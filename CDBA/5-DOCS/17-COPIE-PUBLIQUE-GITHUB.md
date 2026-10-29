# Copie publique de démonstration pour GitHub Pages

Dossier : `CDBA/1-DEMO`, régénéré par `2-CODE-PYTHON/copie-publique.py`. En phase 7 c'était un dépôt git
séparé (un seul commit `8ab54cc`, branche `main`) ; aujourd'hui `1-DEMO/` n'a pas de `.git` propre :
les étapes git ci-dessous supposent un dépôt de publication à part [À CONFIRMER]. **Rien n'a été poussé.**

## Contenu (19 fichiers)

Une copie de `3-CODE-SITE/` uniquement : 11 pages HTML (accueil, inscription,
mentions légales, confidentialité, conditions, cookies, crédits, connexion,
trois espaces de démonstration), `css/style.css`, `js/demo-comptes.js`,
`js/inscription.js`, `img/` (logo, murène JPEG et WebP, motif SVG),
`robots.txt`. Logo et murène : **inclus**.

Différences avec `3-CODE-SITE/` :

- `noindex, nofollow` sur les 11 pages ; `robots.txt` : `Disallow: /` ;
- `sitemap.xml` supprimé, balises canoniques retirées, plus aucun domaine
  provisoire ;
- bandeau « Version de démonstration, non officielle. Contenu provisoire. »
  en haut de chaque page (classe `.bandeau-demo-publique`, ajoutée en fin de
  `css/style.css`). Il est placé en tête de page, sans `position: fixed`,
  pour ne jamais masquer le contenu ni le focus.

Absents : `5-DOCS/`, `5-DOCS/legal-brouillons/`, certificats, historique du dépôt
principal, fichiers cachés (`.env`, `.DS_Store`). Vérifié par `find` et `grep`.

Le commit porte une identité neutre (`Demo CDBA <demo@example.invalid>`),
car aucune identité git n'est configurée sur ce Mac : sinon git aurait
utilisé le nom de session et le nom de l'ordinateur, visibles publiquement.

## Publier (à faire soi-même)

Étapes vérifiées le 21 octobre 2026 sur docs.github.com : « Creating a new
repository », « Adding locally hosted code to GitHub », « About remote
repositories », « Creating a GitHub Pages site », « Configuring a publishing
source for your GitHub Pages site ».

1. **Créer le dépôt vide** sur github.com : icône **+** en haut à droite >
   **New repository** > **Owner** : votre compte > **Repository name** : par
   exemple `cdba-plongee-demo` > **Public** > ne cocher **ni README, ni
   .gitignore, ni licence** > **Create repository**. Avec GitHub Free, un
   dépôt doit être public pour utiliser Pages.

2. **Facultatif : signer le commit à votre nom.** Remplacez les valeurs par
   les vôtres (l'adresse peut être votre adresse « noreply » de GitHub, dans
   les réglages Emails du compte [À VÉRIFIER : non relu dans la documentation]) :

   ```
   cd CDBA/1-DEMO
   git config user.name "VOTRE-NOM"
   git config user.email "VOTRE-ADRESSE"
   git commit --amend --reset-author --no-edit
   ```

3. **Relier et pousser** (remplacez `UTILISATEUR` et `DEPOT`) :

   ```
   cd CDBA/1-DEMO
   git remote add origin https://github.com/UTILISATEUR/DEPOT.git
   git remote -v
   git push -u origin main
   ```

   Git demande votre nom d'utilisateur GitHub puis un mot de passe : le mot
   de passe du compte n'est **pas** accepté ; saisissez un *personal access
   token* (ou utilisez un gestionnaire d'identifiants comme Git Credential
   Manager).

4. **Activer Pages** : dans le dépôt, **Settings** > **Pages** (section
   « Code and automation ») > **Build and deployment** > **Source** :
   **Deploy from a branch** > branche **main**, dossier **/ (root)** > **Save**.

5. **Adresse du site** : `https://UTILISATEUR.github.io/DEPOT/`. La
   documentation ne donne pas de délai de publication : rechargez la page
   Pages des réglages jusqu'à ce que l'adresse s'affiche.

## À savoir avant de publier

- **Le site sera public** : n'importe qui pourra le voir, même avec
  `noindex` et `Disallow: /`, qui demandent seulement aux moteurs de ne pas
  le référencer.
- **Droits non confirmés** : le logo (marque de la Fédération) et la photo de
  la murène sont inclus alors que leurs droits sont [À CONFIRMER]. Pour les
  retirer, me redemander la copie avec « LOGO_MURENE = EXCLU ».
- **Contenu non validé par le club** : pages légales provisoires, nombreux
  champs [À CONFIRMER] / [À COMPLÉTER].
- **Comptes fictifs publics** : Marie, Paul, Sophie et leurs mots de passe
  sont lisibles par tous ; ils ne protègent rien.

## Tester la copie localement, comme sur GitHub Pages

```
mkdir -p ~/cdba-pages && ln -sfn "$PWD/1-DEMO" ~/cdba-pages/cdba-demo   # à lancer depuis CDBA/
cd ~/cdba-pages && python3 -m http.server 8092 --bind 127.0.0.1
```

Puis ouvrir http://127.0.0.1:8092/cdba-demo/ (arrêt : Ctrl+C).

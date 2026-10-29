# Comptes fictifs de démonstration

> **Ce n'est pas une authentification.** La saisie est comparée, dans le
> navigateur, à une table écrite en clair dans un fichier public : n'importe
> qui peut la lire. Rien n'est stocké (aucun cookie, aucun `localStorage` ni
> `sessionStorage`) ni envoyé. Le rôle n'est porté que par l'adresse de la
> page : chacun peut ouvrir directement les pages de démonstration.

## Les trois comptes

| Compte | Rôle | Identifiant | Mot de passe | Page d'arrivée |
|--------|------|-------------|--------------|----------------|
| Marie | Adhérent | `marie` | `marie2026` | `/espace-demo/index.html` |
| Paul | Moniteur | `paul` | `paul2026` | `/espace-moniteur-demo/index.html` |
| Sophie | Administrateur | `sophie` | `sophie2026` | `/espace-admin-demo/index.html` |

Les adresses se terminent par `index.html` (phase 9) pour que la maquette
s'ouvre aussi hors ligne, par un double-clic (`file://`).

## Ce que montre chaque espace (phase 9)

- **Marie (adhérent) :**
  - profil (nom, prénom, niveaux) ;
  - « Définir ou changer mon mot de passe », formulaire fictif : les
    champs ne sont jamais lus ;
  - inscription à une fosse (date, stab, covoiturage, véhicule, places,
    moins de 18 ans) ;
  - fosses de la saison, dossier.
- **Paul (moniteur) :** inscrits par fosse (Adhérents / Moniteurs), fiche de
  chaque membre, palanquées et DP, dossier de Marie.
- **Sophie (administrateur) :** comme Paul, plus rôles (Adhérent / Moniteur),
  forfait payé, création de compte (inactive).

« Mot de passe oublié » est sur la page de connexion (`/connexion/`), car
un utilisateur non connecté n'atteint pas son espace. Le formulaire est
fictif : le champ e-mail n'est jamais lu, aucun e-mail n'est envoyé.

Les données des espaces moniteur et administrateur (8 personnes EXEMPLE)
sont dans `3-CODE-SITE/js/encadrement.js`. Les changements restent en mémoire et
sont perdus au rechargement.

L'identifiant ne tient pas compte des majuscules. Un mauvais mot de passe ou
un compte inconnu affiche le même message générique (« Identifiant ou mot de
passe incorrect ») sous le champ du mot de passe.

## Fichiers concernés

- `3-CODE-SITE/js/demo-comptes.js` : la table des comptes et la vérification (seul
  fichier à modifier pour changer un compte).
- `3-CODE-SITE/connexion/index.html` : bandeau, liste des comptes, formulaire,
  chargement du script.
- `3-CODE-SITE/espace-demo/`, `3-CODE-SITE/espace-moniteur-demo/`, `3-CODE-SITE/espace-admin-demo/` :
  les trois espaces (`noindex, nofollow`, hors du plan du site).
- `3-CODE-SITE/inscription.html` : bouton « Se connecter » vers `connexion/`.
- `3-CODE-SITE/js/encadrement.js` : personnes EXEMPLE, listes, fiches, palanquées,
  rôles et forfaits (espaces moniteur et administrateur).
- `3-CODE-SITE/js/inscription.js` : profil, mot de passe fictif, inscription
  (espace adhérent) et « Mot de passe oublié » simulé (connexion).
- `3-CODE-SITE/css/style.css` : blocs `.comptes-demo`, `.bandeau-maquette`, et le
  bloc commençant par « Maquette de l'espace adhérent ».

## Supprimer complètement la démonstration

Supprimer, depuis `CDBA` (commande `git rm`, à lancer soi-même) :

- les fichiers `3-CODE-SITE/js/demo-comptes.js` et `3-CODE-SITE/js/encadrement.js` ;
- les dossiers `3-CODE-SITE/connexion`, `3-CODE-SITE/espace-demo`,
  `3-CODE-SITE/espace-moniteur-demo` et `3-CODE-SITE/espace-admin-demo`.

Puis :

1. Dans `3-CODE-SITE/inscription.html`, retirer le bouton « Se connecter » (ou le
   faire pointer vers la vraie connexion).
2. Vérifier qu'il ne reste aucun lien ni aucune mention (le résultat doit
   être vide) :

   ```
   grep -rn "connexion/\|espace-demo\|espace-moniteur-demo\|espace-admin-demo\|demo-comptes\|encadrement" 3-CODE-SITE/
   ```

3. Facultatif : supprimer dans `3-CODE-SITE/css/style.css` les blocs `.comptes-demo`,
   `.bandeau-maquette` et le bloc « Maquette de l'espace adhérent ».
4. Committer.

Si le formulaire d'inscription aux fosses doit rester disponible, il faudra
le déplacer vers la vraie zone connectée (voir `13-VRAIE-AUTHENTIFICATION.md`)
avant de supprimer `3-CODE-SITE/espace-demo/`.

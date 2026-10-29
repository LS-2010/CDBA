# Rapport de phase 4 : fond de page et maquette de l'espace adhérent

Tag de départ : `depart-phase4`. La phase a été coupée par la limite, puis
reprise le 21 octobre 2026 sans rien refaire.

## Fait

| Thème | Commit | Détail |
|-------|--------|--------|
| Erreurs du formulaire | `db1dfd8` | Une erreur sous chaque champ (7 emplacements), `aria-invalid`, focus sur le premier champ en erreur, plus de message global. |
| A. Fond | `00aef85` | Bandes pleines en alternance : blanc, bleu très clair `#F0F4F9` (6 % de `#0050A0`), bandeau bleu foncé `#053A57` pour les dates. Motif de courbes de niveau en fichier SVG statique externe (`img/courbes.svg`), traits à 12 % d'opacité, sans animation. Murène affichée jusqu'à 604 px, sa taille native, dans le bandeau foncé (environ 547 px avant). Espacements verticaux réduits. |
| B. Maquette | `fb4c95e` | `/connexion/` : formulaire visuel sans mot de passe, champ sans `name`, aucun script, bouton d'envoi inactif, bouton « Entrer en mode démo ». `/espace-demo/` : en-tête « Alex Exemple EXEMPLE » avec « Se déconnecter » vers le site public ; prochaine fosse et statut ; mes inscriptions (tableau) ; s'inscrire à une date (tableau, liens vers le formulaire public) ; niveau et stab ; mes données (consulter ; modifier et demander la suppression, inactifs) ; documents à fournir en liste de contrôle, sans téléversement ; tarifs `[À CONFIRMER]` ; paiement, espace moniteurs et espace administrateurs vides et inactifs. Bandeau « MAQUETTE DE DÉMONSTRATION : aucune donnée n'est enregistrée » sur les deux pages. |
| Note de retrait | `6aab290` | `5-DOCS/09-RETIRER-MAQUETTE.md` |
| Apostrophes | `83df276` | 18 apostrophes droites remplacées par « ’ » (hors balise CSP, qui exige les droites). |
| Correctif 320 px | `61b566d` | `/connexion/` débordait de 1 px à 320 px : les boutons du groupe d'actions peuvent maintenant passer à la ligne. |

Les pages de démonstration sont en `noindex, nofollow`. Aucune page
publique n'y renvoie (vérifié par recherche dans le code). Il n'existe ni
plan du site ni `robots.txt`.

## Contrôles (suite lancée une fois, en arrière-plan, Chromium, 6 pages)

| Contrôle | Résultat réel |
|----------|---------------|
| Défilement horizontal, 6 pages × 10 largeurs de 320 à 5120 px | 1 défaut : `/connexion/` à 320 px, 1 px. Corrigé, puis remesuré seul : 0 px à 320 et 375 px sur `/connexion/` et `/espace-demo/`. |
| Contraste du texte ≥ 4,5:1, 6 pages × 375 et 1280 px | 0 échec |
| Cibles tactiles < 44 px | 0 |
| Un seul `h1`, aucun saut de niveau de titre, aucune image sans `alt` | conforme sur les 6 pages |
| Style ou script en ligne, erreurs CSP ou console | 0 |
| Clavier : contour de focus visible | 6 pages, 0 élément sans contour |
| Formulaire vide | 7 erreurs affichées, pas de message global, focus sur « nom », `aria-invalid="true"` |
| Formulaire complet | aucune requête externe ; consentement non précoché ; autorisation parentale affichée seulement si « oui » |

Contraste sur le motif, calculé et non mesuré par la suite (elle ne lit que
les couleurs de fond, pas l'image de fond). Pire pixel du motif `#D3E0EE` :
texte 13:1, bleu 5,9:1, texte secondaire 6,3:1. Verre posé sur le motif :
bleu 7,6:1. Sur le bandeau foncé : blanc 12:1, bleu pâle `#D6E4F0` 9,3:1.
Aucun rouge sur le bandeau foncé.

## Non vérifié ou tronqué

- La vérification du verre par la suite ne s'applique plus : il ne
  recouvre plus la photo. Son contraste repose sur le calcul ci-dessus.
- Après le correctif de 320 px, seule la largeur des pages de démonstration
  a été remesurée, pas toute la suite.
- Testé dans Chromium seulement : ni Safari, ni Chrome (non installé), ni
  vrai téléphone, ni lecteur d'écran.

## Adresses

- Serveur local : `cd CDBA/3-CODE-SITE && python3 -m http.server 8091 --bind 127.0.0.1`
- Site public : http://127.0.0.1:8091/
- Connexion de démonstration : http://127.0.0.1:8091/connexion/
- Espace de démonstration : http://127.0.0.1:8091/espace-demo/

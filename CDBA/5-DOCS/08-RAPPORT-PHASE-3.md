# Rapport de phase 3 : correctifs et design

Date : 20 octobre 2026. Tag de départ : `depart-phase3`.

## A. Correctifs

| Point | Fait | Détail |
|-------|------|--------|
| Tarifs | oui | Aucun prix publié : `[À CONFIRMER]`. Les deux sources (ancien site, cdba.club 2026) notées dans `03-A-FOURNIR.md`. |
| Murène | oui | Original sans « cropped- » récupéré (JPEG 604 × 453). La bannière 940 × 198 en était un agrandissement recadré : non utilisée. Droits inconnus, provisoire, noté dans `03-A-FOURNIR.md`. Original conservé dans `sources/`, hors du site. |
| Sources officielles | oui | cdba.club/mentions-legales et /presentation/les-elus-2 lus avec WebFetch. Brouillons complétés, marqués « À VALIDER ». Président indiqué sur la page des élus : THIBERT Sandy. Absents de cdba.club : hébergeur, directeur de la publication, siège, RNA/SIREN. |
| Contact | oui | plongee@cdba.club sur la page Inscription. |
| Mineurs | oui | Question oui/non « Avez-vous moins de 18 ans ? », sans date de naissance. « Oui » affiche un texte d'autorisation parentale `[À CONFIRMER]`. |
| Niveaux et stab | oui | Les 18 niveaux et les 7 choix de stab exactement comme fournis. |

## B. Skills de design

Lus une fois chacun, dans l'ordre : design-taste-frontend, impeccable,
puis web-design-guidelines pour la revue finale.

- **Retenu :** suppression des tirets cadratins et du surtitre ; accroche
  alignée à gauche avec une vraie photo ; un seul rayon d'arrondi (6 px) ;
  ombre décalée et floutée, teintée de bleu ; sections de mises en page
  variées ; sélection de texte et curseur de saisie aux couleurs de la
  charte ; encadrés « à compléter » en pointillé 1 px au lieu d'une
  bordure gauche épaisse ; espaces insécables ; `fetchpriority` sur la
  photo ; `theme-color` ; `touch-action`.
- **Écarté (vos règles priment) :** React, Tailwind, bibliothèques
  d'animation, icônes, images Picsum ou générées, mode sombre, police
  externe, flou et backdrop-filter, animations.
- **Non exécuté :** le lanceur d'impeccable (`scripts/impeccable context`),
  qui peut télécharger et exécuter un binaire.

## C. Design

- **Murène :** retouche classique sur copie (niveaux par canal coupés à
  0,5 %, contraste ×1,05, masque flou d'intensité 0,35), 604 × 453 px, sans
  agrandissement. Avant/après : `5-DOCS/murene-avant-apres.jpg`. Gain modeste,
  car l'original couvrait déjà presque toute la plage de chaque canal
  (R 0-244, V 5-232, B 7-238). Version retouchée retenue. Affichage limité
  à 604 px CSS.
  Outil : canevas Chromium. Le script Swift et CoreImage prévu n'a pas
  compilé, à cause d'une configuration cassée des Command Line Tools.
- **Verre :** un seul élément, le panneau d'horaires posé sur la photo. Fond
  blanc à 88 %, liseré clair de 1 px, ombre fixe, rayon de 6 px. Sans flou
  ni dégradé.
- **Logo :** fichier non modifié, affiché de 88 à 120 px de large.
  Retouche **proposée, non appliquée** : obtenir ou redessiner une version
  vectorielle à fond transparent, pour pouvoir l'afficher plus grand ou
  sur une photo.
- **Mise en page :** accroche en deux colonnes (texte et photo), dates en
  grands chiffres sur une rangée sous un filet rouge, infos pratiques sur
  trois colonnes de texte, tarifs en attente, ligne discrète « non
  disponible » pour les espaces à venir.

## D. Contrôles (suite lancée une fois, en arrière-plan, Chromium)

| Contrôle | Résultat |
|----------|----------|
| Défilement horizontal, 4 pages × 10 largeurs de 320 à 5120 px | aucun |
| Contraste du texte ≥ 4,5:1, 4 pages × 375 et 1280 px | 0 échec |
| Verre : contraste minimal mesuré sur les pixels réels sous le panneau | 6,07:1 (375 px), 6,02:1 (1280 px) ; calcul au pire cas théorique (pixel noir dessous) : 13,2:1 texte, 6,0:1 bleu |
| Cibles tactiles < 44 px | 0 |
| Un seul `h1`, aucun saut de niveau de titre, aucune image sans `alt` | conforme |
| Style ou script en ligne, erreurs CSP ou console | 0 |
| Focus visible au clavier | conforme |
| Formulaire : manques listés, autorisation parentale affichée seulement si « oui », consentement non précoché, aucune requête externe | conforme |

**Non revérifié par la suite :** les petites corrections faites après son
passage (espaces insécables, `fetchpriority`, `theme-color`,
`touch-action`). Seul un contrôle des sources a été fait : aucun style en
ligne, aucun tiret cadratin.

## Non fait ou non vérifié

- Apostrophes droites « ' » laissées (la revue recommande « ’ »).
- Erreurs du formulaire résumées dans un message unique, pas à côté de
  chaque champ.
- Testé sur Chromium seulement : ni Safari, ni Chrome (non installé), ni
  vrai téléphone, ni lecteur d'écran. Pas de Lighthouse.
- Fichier de quota `.claude/usage.json` absent : consommation non lue.

## Couleurs réellement utilisées

| Couleur | Usage |
|---------|-------|
| `#0050A0` (bleu du logo) | titres, liens, bouton, chiffres des dates, focus, sélection |
| `#DC1F1E` (rouge du logo) | filets, puces, soulignement de la navigation, bordure d'erreur. Jamais en texte. |
| `#1A1A1A` | texte principal |
| `#4D4D4D` | texte secondaire, bordures des champs, pointillés « à compléter » |
| `#D9D9D9` | filet du pied de page |
| `#FFFFFF` | fond ; verre à 88 % d'opacité, liseré à 95 % |
| `rgb(0 48 96 / 0.18)` | ombre du verre |
| `rgb(0 80 160 / 0.15)` | surbrillance au toucher |

Le gris du logo `#A6A6A6` reste défini dans les variables, mais il n'est plus utilisé.

## Ouvrir le site en local

```
cd CDBA/3-CODE-SITE
python3 -m http.server 8091 --bind 127.0.0.1
```

Puis ouvrir http://127.0.0.1:8091 dans le navigateur. Arrêt : Ctrl+C.
Chrome n'est pas installé dans /Applications sur ce Mac : il faut
l'installer, ou utiliser Safari.

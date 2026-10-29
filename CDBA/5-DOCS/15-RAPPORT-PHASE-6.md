# Rapport de phase 6 : tarifs, comptes, pages légales

Tags : `depart-phase6` (correctif connexion), `depart-phase6b` (suite de la phase).
Rien n'est mis en ligne.

## Fait

| Commit | Thème |
|--------|-------|
| `b75a28b`, `28df7d3`, `b76f944` | Correctif : maquette `/connexion/` (identifiant, mot de passe), `5-DOCS/13`, textes légaux et liste « avant mise en ligne » (`5-DOCS/12`). |
| `a788459` | A. Tarifs confirmés publiés (accueil, maquette, `5-DOCS/03`) : forfait 70 €, à la carte 20 €. Non compris : consigne 1 €, licence FFESSM et assurance (montants [À CONFIRMER]). Incohérence « toutes les fosses de l'année » contre « forfait 5 fosses » notée dans `5-DOCS/03`. |
| `1202ef9` | B. Pas de création de compte. Page « Inscription » informative avec bouton « Se connecter ». Formulaire déplacé dans `/espace-demo/` : nom et prénom pré-remplis (EXEMPLE), seuls niveau, stab, dates et « moins de 18 ans » demandés. Plus aucun libellé « S'inscrire ». |
| `84b01ad` | C. Pages légales provisoires : mentions légales, confidentialité, conditions d'inscription et d'utilisation (avec droit de rétractation en [À CONFIRMER]), cookies, crédits. Pied de page commun sur les 9 pages. Mention « Version provisoire » (classe `.version-provisoire`, retrait : `5-DOCS/14`). Sitemap : 7 pages publiques, sans la démo. |
| `0c176cf` | C. Tableau des 14 points dans `5-DOCS/12-CONFORMITE.md` (statut, preuve, source), sans conclusion de conformité. |

Page Cookies : test avant rédaction sur les 6 pages existantes, puis suite
complète sur les 9 pages. Chromium et Firefox : 0 cookie, `localStorage`,
`sessionStorage` et IndexedDB vides, 0 requête vers un autre domaine. D'où
« aucun cookie ni traceur », sans bandeau.

## Contrôles (suite complète, une fois, en arrière-plan, 9 pages)

| Contrôle | Chromium 153 | Firefox 155 |
|----------|--------------|-------------|
| Défilement horizontal, 10 largeurs de 320 à 5120 px | aucun | aucun |
| Texte à 200 %, 320/375/414/768 px | aucun débordement | non mesuré |
| Contraste < 4,5:1 / cibles < 44 px / image sans `alt` | 0 / 0 / 0 | non mesuré |
| Style ou script en ligne (CSP) | 0 | non mesuré |
| Clavier : éléments atteints avec contour / sans contour | 41 à 43 / 0 | 45 / 0 |
| Erreurs console | 0 | 0 |
| Formulaire démo : envoi vide | 4 erreurs sous les champs, focus « niveau » | idem |
| Formulaire démo : envoi complet | message de maquette, 0 requête externe | idem |

Appareils simulés (Chromium, 12 configurations) : 0 débordement, 0 cible
< 44 px, 0 chevauchement. Couleurs forcées et mouvement réduit : conformes.
Pas de Lighthouse dans cette phase.

## Non vérifié

- WebKit et Safari (version figée macOS 14 incompatible avec Playwright 1.63),
  vrai iPhone, vrai Android, Samsung Internet, lecteurs d'écran.
- Pages cnil.fr en « 503 » le 21 octobre 2026 : sources CNIL lues via le PDF
  officiel et Légifrance seulement.
- Contenu juridique : à valider par un juriste ou le bureau.

## Restant en [À CONFIRMER] ou [À COMPLÉTER] sur le site

- **Tarifs** (accueil, conditions, démo) : montant de la licence FFESSM,
  montant de l'assurance, modalités de paiement.
- **Conditions** : annulation et remboursement, droit de rétractation,
  existence d'un règlement intérieur.
- **Confidentialité** : responsable du traitement (club ou fédération),
  contact pour les données, base légale, personnes ayant accès, hébergeur,
  lieu de stockage, durée de conservation, démarche d'autorisation
  parentale, date de dernière mise à jour.
- **Mentions légales** : forme juridique, RNA ou SIREN, siège social,
  téléphone, directeur ou directrice de la publication, hébergeur (nom,
  adresse, téléphone).
- **Connexion** : contact plongee@cdba.club pour les problèmes de connexion.
  **Identifiants** : qui est l'administrateur.
- **Crédits** : droits du logo, photographe et droits de la murène.
- **Démo** : texte et démarche d'autorisation parentale.
- **Hors site** : domaine (`domaine-a-confirmer.example` dans `robots.txt` et
  `sitemap.xml`) ; incohérence du forfait (`5-DOCS/03`).

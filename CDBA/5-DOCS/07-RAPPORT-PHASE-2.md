# Rapport de phase 2

Date : 20 octobre 2026. Tag de départ : `depart-phase2`.

## Logo

- Fichier fourni : `images.png`, PNG indexé 8 bits, **511 × 391 px**, fond
  blanc opaque. Original intact ; copie identique (même SHA-256) dans
  `3-CODE-SITE/img/logo-cdba.png`.
- Rien n'a été téléchargé depuis cdba.club.
- **Taille** : suffisante pour l'affichage prévu (88 px de large dans
  l'en-tête, net jusqu'à 170 px sur écran de densité 3). **Trop petite**
  pour un affichage en grand (au-delà de 255 px de large sur écran Retina) :
  il n'a donc pas été utilisé en grand, et rien n'a été étiré. Une version
  vectorielle permettrait de l'afficher plus grand.
- Couleurs échantillonnées : bleu `#0050A0`, rouge `#DC1F1E`, gris
  `#A6A6A6` (voir `06-CHARTE.md`).
- Droits : à confirmer par écrit avec le président (noté dans
  `03-A-FOURNIR.md`).

## Site réalisé (`3-CODE-SITE/`)

| Page | Contenu |
|------|---------|
| `index.html` | Dates, horaires, lieu, matériel, niveaux, tarifs ; emplacement photo vide signalé ; espaces moniteurs, administrateurs, paiement et e-mails listés comme « non disponible » |
| `inscription.html` | Nom, prénom, niveau, taille de stab, date(s) ; consentement non précoché ; lien vers la politique ; champ piège anti-spam ; **envoi non activé** |
| `mentions-legales.html`, `confidentialite.html` | Emplacement « en attente de validation » : les brouillons ne sont pas publiés |

Choix techniques : HTML et CSS statiques, polices système (aucune licence,
aucun serveur tiers), un seul script externe pour le formulaire, aucune
animation hormis un changement de couleur de 150 ms sur le bouton
(désactivé si l'utilisateur réduit les animations). Pages en `noindex`
tant que le club n'a pas validé.

## Vérifications faites (Chromium, Playwright)

| Contrôle | Résultat |
|----------|----------|
| Défilement horizontal, 4 pages × 10 largeurs de 320 à 5120 px | aucun |
| Contraste du texte ≥ 4,5:1 | conforme sur les 4 pages |
| Cibles tactiles ≥ 44 px | conforme après correction |
| Un seul `h1`, aucun saut de niveau de titre | conforme |
| Images sans texte alternatif | aucune |
| Style ou script en ligne | aucun ; CSP sans `unsafe-inline`, aucune erreur |
| Navigation au clavier, focus visible | conforme sur tout le parcours |
| Formulaire vide → message listant les manques | conforme |
| Consentement précoché | non |
| Requête réseau à l'envoi | aucune |
| `.DS_Store` ou `.env` suivis par git | aucun |

## Non fait, non vérifié, à décider

- **Correctif précédent** : votre dernier message mentionne « le reste du
  correctif précédent ». Je n'ai aucun correctif dans cette session ; la
  phase 2 suit les règles du message initial.
- **Liste des niveaux** du formulaire provisoire (PN1 à PN4, PE1, élève
  apnée, MEF2 : seuls les niveaux cités) — à compléter par le club.
- Le formulaire ne demande **ni contact, ni formule** (forfait ou à la
  carte) : conforme à la consigne, mais le club devra dire s'il en a besoin.
- La case de consentement suit la consigne ; la base légale reste à
  choisir (voir `04-OBLIGATIONS-LEGALES.md`, point 7).
- CSP posée en balise `meta` : `frame-ancestors` et les en-têtes de sécurité
  devront être réglés chez l'hébergeur, encore inconnu.
- Non testé sur Safari ni sur un vrai téléphone (Chromium uniquement), ni
  avec un lecteur d'écran.
- Fichier de quota `.claude/usage.json` absent : consommation non lue.

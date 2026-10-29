# Phase 2 — Charte provisoire tirée du logo

## Logo

- Fichier d'origine : `images.png`, fourni par le club le 20 octobre 2026.
- Format : PNG indexé 8 bits (74 couleurs), **511 × 391 px**, fond blanc
  opaque (pas de transparence).
- Empreinte SHA-256 : `bdb41f716ab1f03e5a8ce6bd0b12279ed7e38a970739a47b0c5d49b5a8ea025f`
- L'original n'est ni modifié, ni recoloré, ni recadré. Le site utilise une
  copie identique octet pour octet : `3-CODE-SITE/img/logo-cdba.png`.
- Droits : le logo contient la marque de la Fédération. Usage à confirmer
  par écrit avec le président (voir `03-A-FOURNIR.md`).

### Taille d'affichage

Pour rester net, l'image ne doit pas être affichée plus grande que sa
définition divisée par la densité de l'écran :

| Écran | Largeur maximale nette |
|-------|------------------------|
| densité 1 | 511 px |
| densité 2 (la plupart des téléphones, Mac Retina) | 255 px |
| densité 3 (iPhone récents) | 170 px |

Le site l'affiche à **140 px de large au plus** : c'est net partout, sans
étirement. Un affichage plus grand demanderait une version vectorielle.

Le fond du logo est blanc : il est toujours posé sur fond blanc.

## Couleurs échantillonnées sur le logo

Couleurs les plus fréquentes dans les pixels du fichier (fond blanc exclu) :

| Rôle | Code | Pixels | Contraste sur blanc |
|------|------|--------|---------------------|
| Bleu CDBA | `#0050A0` | 14 175 | 7,91:1 — texte, liens, boutons |
| Rouge CDBA | `#DC1F1E` | 15 469 | 4,93:1 — accents, filets ; texte possible sur blanc uniquement |
| Gris CDBA | `#A6A6A6` | 5 800 | 2,43:1 — **décoration seulement**, jamais pour du texte ni une bordure de champ |

Couleurs neutres ajoutées (non tirées du logo) :

| Rôle | Code | Contraste |
|------|------|-----------|
| Texte principal | `#1A1A1A` | 17,4:1 sur blanc |
| Texte secondaire | `#4D4D4D` | 8,45:1 sur blanc |
| Fond blanc | `#FFFFFF` | — |

## Polices

Aucune police fournie par le club. Le site utilise les **polices système**
de chaque appareil : aucune licence à acquérir, aucun chargement depuis un
serveur tiers. À remplacer si le club fournit une police officielle avec
sa licence web.

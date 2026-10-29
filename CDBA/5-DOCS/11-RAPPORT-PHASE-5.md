# Rapport de phase 5 : contrôle final, compatibilité, téléphone

Tag de départ : `depart-phase5`. Navigateurs testés : Chromium 153 et
Firefox 155 (Playwright 1.63).

**WebKit non testé : version figée macOS 14 incompatible avec Playwright
1.63, à tester à la main sur iPhone/Safari.** Le WebKit fourni
(`webkit_mac14_special-2251`) démarre, mais l'ouverture d'une page échoue
(« Unknown setting: PushAPIEnabled ») ou reste bloquée.

## Fait (un commit par thème)

| Commit | Thème |
|--------|-------|
| `59419fb` | Texte à 200 % : trois causes trouvées au diagnostic, corrigées une à une (`overflow-wrap: anywhere`, boutons autorisés à passer à la ligne, colonne des intitulés `.fiche` limitée à `fit-content(50%)`). 48 mesures (6 pages × 320/375/414/768 px × texte 100 % et 200 %) : 0 px de débordement. |
| `fee1af3` | Clavier mobile : `autocapitalize="words"` sur nom et prénom, `autocapitalize="none"` sur l'e-mail de la maquette. |
| `d80add8` | Murène en WebP (82 Ko au lieu de 102 Ko) dans un `<picture>`, repli JPEG, dimensions déclarées. Pas de version 400 px : sur téléphone (densité ≥ 2), le navigateur choisirait de toute façon la 604 px. |
| `8df4d1b` | Référencement des 4 pages publiques : `noindex` retiré, description unique par page, canonique, Open Graph de base, `robots.txt`, `sitemap.xml`. `/connexion/` et `/espace-demo/` restent en `noindex` et hors du plan du site. Aucune donnée structurée. |
| `4d99664` | Icône déclarée (logo existant, fichier inchangé) : plus d'erreur 404 sur `/favicon.ico`. |

## Compatibilité navigateurs (ordinateur, 6 pages)

| Contrôle | Chromium 153 | Firefox 155 | WebKit |
|----------|--------------|-------------|--------|
| Défilement horizontal, 10 largeurs de 320 à 5120 px | aucun | aucun | non testé |
| Formulaire : 7 erreurs sous les champs, focus sur « nom », autorisation parentale, envoi complet | conforme | conforme | non testé |
| Clavier : éléments atteints avec contour visible / sans contour | 39 à 43 / 0 | 45 / 0 | non testé |
| Erreurs console | aucune | aucune | non testé |

### Fonctionnalités récentes et repli (versions minimales relevées sur MDN)

| Fonctionnalité | Minimum | Si absente |
|----------------|---------|------------|
| `text-wrap: balance` | Safari 17.5, Chrome 114, Firefox 121, Samsung 23 | titres non équilibrés, lisibles |
| `:focus-visible` | Safari 15.4, Chrome 86, Firefox 85, Samsung 14 | Safari 15.0 à 15.3 : contour par défaut du navigateur (jamais supprimé) |
| `accent-color` | Safari 15.4, Chrome 93, Firefox 92, Samsung 17 | cases et boutons radio aux couleurs système |
| `gap` en flexbox | Safari 14.1, iOS 14.5, Chrome 84, Samsung 14 | couvert par la cible Safari 15 et plus |
| `:is()` | Safari 14, Chrome 88, Firefox 78, Samsung 15 | couvert |
| `loading="lazy"` | Safari 15.4, Chrome 77, Firefox 75, Samsung 12 | image chargée tout de suite |
| `fetchpriority` | Safari 17.2, Chrome 101, Firefox 132, Samsung 19 | ignoré, sans effet visible |
| WebP | (non vérifié sur MDN dans cette session) | repli JPEG via `<picture>` |

Le code JavaScript (fonctions fléchées, gabarits de chaînes, `for…of`) est
dans les capacités de Safari 15 ; ce point n'a pas été revérifié sur MDN.

## Appareils simulés (Chromium, portrait et paysage, 6 pages chacun)

| Appareil | Portrait | Paysage | Débordement | Texte min. | Cibles < 44 px | Chevauchements |
|----------|----------|---------|-------------|-----------|----------------|----------------|
| iPhone SE | 320×568 | 568×320 | 0 | 15 px (13 px démo) | 0 | 0 |
| iPhone 15 Pro Max | 430×739 | 814×380 | 0 | idem | 0 | 0 |
| Pixel 7 | 412×839 | 863×360 | 0 | idem | 0 | 0 |
| Galaxy S8 | 360×740 | 740×360 | 0 | idem | 0 | 0 |
| iPad Mini | 768×1024 | 1024×768 | 0 | idem | 0 | 0 |
| Galaxy Tab S4 | 712×1138 | 1138×712 | 0 | idem | 0 | 0 |

Les gabarits iPhone et iPad ont été simulés avec le moteur de Chromium :
ce n'est pas le rendu de Safari.

- Champs de formulaire : 17 px, donc pas de zoom automatique sur iOS.
  Le texte le plus petit fait 15 px, sauf la mention « EXEMPLE » de la démo
  (13 px, en gras).
- Viewport `width=device-width, initial-scale=1`, zoom non bloqué. Pas de
  `viewport-fit=cover` : le navigateur garde le contenu hors de l'encoche
  (en paysage, des marges blanches apparaissent sur les côtés). Aucun
  `100vh` dans le CSS.
- Navigation : deux liens, sans menu déroulant, sans survol, sans script.
- Couleurs forcées : lisible, 0 débordement. Assombrissement forcé de
  Chrome : la page reste claire (`color-scheme: light`), donc lisible.
  Mouvement réduit : transition du bouton à 0 s.
- Poids à vide : accueil 136 Ko (murène 82 Ko, motif 25 Ko, logo 13 Ko,
  CSS 11 Ko, HTML 6 Ko) ; autres pages 51 à 58 Ko.

## Contrôles complets (une fois, en arrière-plan, 6 pages)

Débordement de 320 à 5120 px : aucun. Contrastes : 0 échec. Cibles < 44 px :
0. Un seul `h1`, aucun saut de niveau de titre, aucune image sans `alt`.
Aucun style ni script en ligne. Erreurs CSP ou console : 0. Focus visible
partout. Formulaire : aucune requête externe.

## Lighthouse sur l'accueil (13.5.0, Chromium 153 sans interface)

**Mac non au repos :** charge moyenne de 10,8 au premier passage, puis de
5,6 et 4,8 au second.

| Passage | Performance | Accessibilité | Bonnes pratiques | SEO |
|---------|-------------|---------------|------------------|-----|
| Mobile, avant l'icône | 100 | 100 | 96 | 85 |
| Ordinateur, avant l'icône | 100 | 100 | 96 | 85 |
| **Mobile, final** | **100** | **100** | **100** | **85** |
| **Ordinateur, final** | **100** | **100** | **100** | **85** |

Mobile final : LCP 1,3 s, CLS 0, TBT 60 ms, FCP 0,8 s.

**Cibles non atteintes :** mobile ≥ 97 (SEO à 85) et ordinateur 100 (SEO à
85). Audits en échec, non corrigés :

- `canonical` : « Is not an absolute URL ». Il faut le domaine
  [À CONFIRMER] pour écrire une adresse absolue.
- `robots-txt` : « CSP violation ». Lighthouse ne peut pas lire le fichier
  depuis la page à cause de la politique de sécurité (`default-src 'none'`).
  Le fichier lui-même est valide ; un moteur de recherche le lit directement.
- `cache-insight`, `document-latency`, CSS non minifié : à régler chez
  l'hébergeur (cache, compression), pas dans le site.
- `lcp-discovery-insight` : sur mobile, le plus grand élément affiché est le
  fond de l'ouverture (motif SVG), découvert par le CSS. La performance
  reste à 100.
- La catégorie « Agentic Browsing » (`llms.txt`) n'est pas visée.

## Non testé : à vérifier à la main

- **Safari et WebKit**, quelle que soit la version (iPhone, iPad, Mac),
  donc Safari 15 à 17. **Samsung Internet. Vrai iPhone, vrai Android.
  Lecteur d'écran** (VoiceOver, TalkBack).
- Clavier virtuel réel : type de clavier, majuscules automatiques, champ
  actif qui reste visible.
- Encoche et barre d'adresse mobile qui se rétracte. Texte agrandi par les
  réglages du téléphone (simulé ici par une taille de police de la page).
- Domaine réel : `robots.txt` et `sitemap.xml` utilisent
  `domaine-a-confirmer.example`, à remplacer avant la mise en ligne.

### Sur iPhone (Safari)

1. Accueil, inscription, mentions, confidentialité, `/connexion/`,
   `/espace-demo/` : pas de défilement horizontal, en portrait et en paysage.
2. Formulaire : toucher « Envoyer » à vide fait apparaître les erreurs sous
   les champs ; le clavier des champs nom et prénom met une majuscule à
   chaque mot ; pas de zoom au toucher d'un champ.
3. « Oui » à la question sur l'âge fait apparaître le texte d'autorisation
   parentale.
4. Réglages > Accessibilité > Affichage et taille du texte > Police plus
   grande : la page reste lisible, sans défilement horizontal.
5. VoiceOver : lecture des titres, des erreurs et du bandeau de maquette.

### Sur Android (Chrome et, si possible, Samsung Internet)

Mêmes points 1 à 3, plus : taille de police système au maximum ; mode
sombre et « Assombrir les pages web » ; TalkBack.

## Ouvrir le site depuis le téléphone (même Wi-Fi)

Adresse du Mac sur le réseau : `ADRESSE-DU-MAC` (peut changer après un
redémarrage de la box ; la retrouver avec `ipconfig getifaddr en0`).

### En HTTP

```
cd CDBA/3-CODE-SITE
python3 -m http.server 8091 --bind 0.0.0.0
```

Ouvrir http://ADRESSE-DU-MAC:8091 sur le téléphone. Si macOS demande
d'autoriser les connexions entrantes pour Python, accepter. Arrêt : Ctrl+C.

### En HTTPS, si le téléphone refuse le HTTP (Safari « HTTPS uniquement »)

mkcert est déjà présent sur ce Mac (`~/.local/bin/mkcert`).

1. Créer une autorité de certification locale, une seule fois (cela ajoute
   un certificat racine au trousseau du Mac) : `mkcert -install`
2. Créer le certificat, hors du dépôt :

   ```
   mkdir -p ~/cdba-certs && cd ~/cdba-certs
   mkcert ADRESSE-DU-MAC localhost
   ```

3. Lancer le serveur HTTPS depuis le dossier du site :

   ```
   cd CDBA/3-CODE-SITE
   python3 -c "import http.server, ssl; s = http.server.ThreadingHTTPServer(('0.0.0.0', 8443), http.server.SimpleHTTPRequestHandler); c = ssl.SSLContext(ssl.PROTOCOL_TLS_SERVER); c.load_cert_chain('$HOME/cdba-certs/ADRESSE-DU-MAC+1.pem', '$HOME/cdba-certs/ADRESSE-DU-MAC+1-key.pem'); s.socket = c.wrap_socket(s.socket, server_side=True); s.serve_forever()"
   ```

4. Faire confiance au certificat racine sur le téléphone. Son emplacement
   est donné par `mkcert -CAROOT` (fichier `rootCA.pem`).
   - iPhone : l'envoyer par AirDrop, puis Réglages > Profil téléchargé >
     Installer, puis Réglages > Général > Informations > Réglages des
     certificats > activer la confiance totale.
   - Android : Paramètres > Sécurité > Chiffrement et identifiants >
     Installer un certificat > Certificat CA.
5. Ouvrir https://ADRESSE-DU-MAC:8443

Après les tests, supprimer ce certificat racine du téléphone. Ne jamais
committer `~/cdba-certs` ni le partager.

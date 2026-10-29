# Compte rendu du club : fonctionnalités (phase 9)

> Maquette (POC) : aucune authentification réelle, données EXEMPLE.
> À valider avec le bureau du club.

## Niveaux

Listes données par le club (phase 9), utilisées partout sur le site. Listes complètes affichées
sur la page d'inscription et dans les espaces moniteur et administrateur (plus sur l'accueil) :

- **Plongée :** Baptême, PN1, N1, PN2, N2, PN3, N3, PN4, GDP, E1, E2, E3, E4.
- **Apnée :** AP (Apnéiste Piscine), ACP (Apnéiste Confirmé Piscine),
  AEL (Apnéiste Eau Libre), ACEL (Apnéiste Confirmé Eau Libre),
  AEEL (Apnéiste Expert Eau Libre), IE1, IE2, MEF1, MEF2,
  IN (Instructeur National).

Points ouverts :

- Un membre a un niveau de plongée et/ou un niveau d'apnée : deux listes
  séparées, au moins un des deux [À CONFIRMER].
- MEF1 et MEF2 servent aussi à la plongée dans la règle du DP
  [À CONFIRMER].
- « Taille de stab » est gardée dans l'inscription [À CONFIRMER si
  conservée].
- Le texte du forfait (« PN1, PN2, PN3, PN4, PE1 et élève apnée ») cite
  « PE1 » et « élève apnée », absents des nouvelles listes [À CONFIRMER].

### Information du club, non affichée sur le site

En apnée, AP et ACP sont limités à 6 m, l'ACEL est validé à 20 m, et la
filière « eau libre » correspond à la profondeur (y compris en fosse).

## Dates et lieu (accueil)

Page lue avec WebFetch le 21 octobre 2026 :
https://www.cdba.club/sections/plongee-sous-marine

| Fosse | Texte lu sur cdba.club | Jour vérifié | Affiché |
|-------|------------------------|--------------|---------|
| Apnée | « Dimanche 24 janvier 2027 - 17h30-19h30 » | dimanche | oui |
| Apnée | « Dimanche 14 mars 2027 - 17h30-19h30 » | dimanche | oui |
| Apnée | « Dimanche 23 mai 2027 - 18h30-20h30 » | dimanche | oui |
| Apnée | « Dimanche 06 juin - 17h30-19h30 » (sans année) | 6 juin 2027 = dimanche (6 juin 2026 = samedi) | oui, avec [À VÉRIFIER SUR cdba.club] pour l'année |

Les cinq dates de plongée (6 décembre 2026, 17 janvier, 28 février,
14 mars, 25 avril 2027, 12h30-13h30) figurent aussi sur cdba.club et
tombent un dimanche.

- **Lieu des fosses d'apnée :** cdba.club n'en indique aucun près des
  dates. Il est affiché « [À VÉRIFIER SUR cdba.club] ».
- **Tarifs lus sur cdba.club, non repris sur le site :**
  - plongée : « 70.00€ Forfait 5 fosses plongée (1h) - Recommandé pour
    N1-N2 > 20€ en unitaire < » ;
  - apnée : « 90.00€ Forfait 4 fosses apnée (2h) > 30€ en unitaire < ».
- **Écart avec le site [À CONFIRMER] :** le site garde le texte du forfait
  fourni en phase 6 (« Obligatoire pour les formations PN1… »), ce qui ne
  correspond pas à « Recommandé pour N1-N2 ». Les tarifs d'apnée ne sont
  pas affichés.

## Moniteur et administrateur : qui voit quoi (choix de la maquette)

Le compte rendu ne fixe pas les droits. La maquette fait le partage
minimal ci-dessous, sans droit ajouté. Tout est [À CONFIRMER] par le
bureau.

| Fonction | Moniteur (Paul) | Administrateur (Sophie) |
|----------|-----------------|-------------------------|
| Inscrits d'une fosse, en deux tableaux (Adhérents / Moniteurs) : nom, prénom, niveau(x), date du certificat médical, fosses de la saison, forfait payé, covoiturage, véhicule, places | lecture | lecture |
| Fiche de chaque membre (dont la date du certificat médical) | lecture | lecture |
| Palanquées : créer, associer un moniteur et des élèves, définir le DP | oui | oui |
| Désigner qui est moniteur (Adhérent par défaut) | non | oui |
| Marquer le forfait payé oui/non | non (lecture seule) | oui |
| Modifier les dates des fosses affichées | non | oui, en mémoire (démonstration, perdu au rechargement) |
| Créer un compte | non | formulaire inactif [À CONFIRMER : comptes créés par l'administrateur ou inscription libre ?] |
| Dossier d'un adhérent (pièces, Valider/Refuser inactifs) | oui (Marie, phase 8) | colonne « Dossier » |

- **Données affichées :** l'administrateur voit le forfait et le dossier de
  chacun dans « Comptes, rôles et forfaits ». Le moniteur voit le forfait
  dans les tableaux, en lecture seule [À CONFIRMER : le moniteur doit-il
  le voir ?].
- **Mémoire seulement :** les palanquées, le DP, les rôles et les forfaits
  changés sont perdus au rechargement. Rien n'est stocké ni envoyé.

## Palanquées et règle du DP

- **Constructeur :**
  - pas de glisser-déposer, aucune animation ;
  - listes déroulantes et boutons « Ajouter le moniteur à la palanquée n »
    / « Ajouter l'élève à la palanquée n », « Retirer … » et « Supprimer
    la palanquée n » ;
  - après chaque action, le focus revient sur un élément proche et le
    résultat est annoncé dans une zone `role="status"`.
- **Règle du DP, telle que donnée :** E3 minimum ou MEF1 minimum. Seuls les
  inscrits de ces niveaux sont proposés.
  - Si aucun inscrit n'a ce niveau, « Définir le DP » affiche un message
    d'erreur textuel (exemple : 28 février 2027).
  - Le niveau est revérifié au clic : un niveau inférieur est refusé avec
    un message.
- **Place de MEF2 et IN dans la règle :** [À CONFIRMER]. La maquette les
  admet par l'ordre de la liste d'apnée (MEF1 < MEF2 < IN). MEF1 et MEF2
  comptent pour le DP en plongée [À CONFIRMER].
- **Règles absentes du compte rendu, donc non appliquées :**
  - nombre d'élèves par palanquée ;
  - DP membre ou non d'une palanquée ;
  - plusieurs moniteurs par palanquée (la maquette en place un seul).

## Exigences du compte rendu : statut

Statuts : **fait** (dans la maquette), **simulé** (l'interface existe,
rien n'est enregistré ni envoyé), **à définir** (avec le club),
**serveur** (demande un vrai serveur).

| Exigence | Statut maquette | Ce que la vraie V1 exigera |
|----------|-----------------|----------------------------|
| Niveaux plongée et apnée, deux listes, au moins un | fait ; règle « au moins un » à définir | stockage par membre, validation côté serveur |
| Adresse de la fosse, dates et heures plongée + apnée | fait (plongée) ; apnée : dates faites, lieu à définir (absent de cdba.club) | aucune (page statique) |
| Profil : nom, prénom, niveaux | simulé | base de données, authentification réelle |
| Définir ou changer le mot de passe | simulé dans l'espace adhérent (champs jamais lus) | serveur : empreinte du mot de passe (`13-VRAIE-AUTHENTIFICATION.md`) |
| Mot de passe oublié | simulé sur `/connexion/` (correctif phase 9 : un utilisateur non connecté ne peut pas atteindre son espace) ; champ e-mail jamais lu, aucun e-mail | serveur + envoi d'e-mails (lien à usage unique et durée limitée), ou réinitialisation par l'administrateur comme prévu dans `13-VRAIE-AUTHENTIFICATION.md` [À CONFIRMER] |
| S'inscrire à une fosse (date, covoiturage, véhicule, places, moins de 18 ans) | simulé (erreurs par champ) | base de données |
| Fosses effectuées cette saison | simulé (valeur EXEMPLE) | calcul à partir des présences réelles [À CONFIRMER : inscription ou présence ?] |
| Mon dossier | simulé (phase 8) | stockage restreint, voir `12-CONFORMITE.md` |
| Inscrits par date, deux tableaux Adhérents / Moniteurs | fait sur données EXEMPLE | base de données, accès réservé |
| Fiche de chaque membre avec date du certificat | fait sur données EXEMPLE | idem, données de santé [À VÉRIFIER] |
| Palanquées : créer, moniteur + élèves, DP (E3 ou MEF1 minimum) | fait, en mémoire | enregistrement serveur ; règle MEF2/IN à définir |
| Désigner les moniteurs, forfait payé | fait, en mémoire (administrateur) | serveur, droits par rôle vérifiés côté serveur |
| Modifier les dates des fosses (administrateur) | fait, en mémoire ; l'accueil garde les dates du fichier source | enregistrement serveur, accueil construit depuis ces dates |
| Création de compte par l'administrateur | formulaire inactif ; à définir (admin ou inscription libre) | serveur + e-mail d'invitation [À CONFIRMER] |
| Séparation moniteur / administrateur | fait (voir tableau plus haut) ; à définir | contrôle des droits côté serveur : une page cachée ne protège rien |
| POC hors ligne (file://) | fait (Chromium, Firefox) | sans objet |

**Ce que la vraie V1 exigera dans tous les cas :**
- authentification réelle ;
- envoi d'e-mails (mot de passe oublié, éventuellement invitations) ;
- base de données ;
- hébergement avec HTTPS ;
- contrat de sous-traitance avec l'hébergeur (`12-CONFORMITE.md`).

## Hébergement : ce qui est nécessaire (sans trancher)

Besoins : un langage côté serveur (par exemple PHP), une base de données,
l'envoi d'e-mails et HTTPS. Les sources ont été lues le 21 octobre 2026.

### OVH / OVHcloud

« OVH » et « OVHcloud » désignent la même société : [À VÉRIFIER], car
aucune page officielle lue ne le dit. Les guides lus sont sur
docs.ovhcloud.com.

- **Hébergement web, spécificités techniques** (mis à jour le 8 juin 2026) :
  https://docs.ovhcloud.com/fr/guides/web-cloud/web-hosting/hosting-technical-specificities.md
  - **PHP :** la version de PHP de l'hébergement se change, et
    « OVHcloud ne change pas automatiquement la version de PHP de votre
    hébergement ». Liste des versions disponibles : [À VÉRIFIER] (la
    page d'information redirige vers help.ovhcloud.com, non lue).
  - **Base de données :** bases MySQL intégrées à l'hébergement, avec
    une « limite de 30 connexions simultanées par base de données ».
    Elles sont inaccessibles depuis l'extérieur.
  - **E-mails :** des quotas horaires s'appliquent aux e-mails envoyés par
    la fonction `mail()` de PHP.
- **Bonnes pratiques d'envoi d'e-mail** (mis à jour le 3 septembre 2026) :
  https://docs.ovhcloud.com/fr/guides/web-cloud/web-hosting/email-sending-best-practices
  - `mail()` fonctionne sans configuration, avec un quota horaire.
  - Le guide recommande le SMTP authentifié (`smtp.mail.ovh.net`, port 465
    ou 587) avec une adresse du domaine (MX Plan, Email Pro ou Exchange).
  - Le guide indique que MX Plan est inclus avec l'hébergement web.
  - Quotas cités : environ 200 e-mails par heure pour une adresse MX Plan.
- **HTTPS (certificat inclus ou non) :** [À VÉRIFIER]. L'adresse du guide
  SSL essayée renvoyait « 404 ».

### OODRIVE

- **Page d'accueil officielle lue :** https://www.oodrive.com/fr/
  - Elle présente des offres de collaboration, de partage de fichiers, de
    signature électronique, de sauvegarde et de réunions (Oodrive Work,
    Sign, Save, Meet, Board, offres SecNumCloud).
  - Elle ne mentionne aucune offre d'hébergement de site web avec PHP,
    base de données ou envoi d'e-mails.
- **Hébergement d'un site comme celui-ci chez OODRIVE :** [À VÉRIFIER]
  auprès d'OODRIVE.

**Choix de l'hébergeur :** au club.

## POC hors ligne

- **Liens :** tous les liens internes visent un fichier explicite
  (`connexion/index.html`, `../espace-demo/index.html`…), pour que le site
  s'ouvre par un double-clic sur `index.html` (protocole `file://`).
- **CSP :** la CSP du site n'a pas été changée.
  - Test en `file://` sous Chromium 153 et Firefox 155 : 11 pages
    parcourues, styles et images chargés, connexion des trois comptes et
    scripts des trois espaces, 0 erreur de console.
  - Aucune variante de CSP n'est nécessaire.
- **Archive :** `python3 -I 2-CODE-PYTHON/poc-hors-ligne.py 6-ZIP/CDBA-POC.zip`
  crée un dossier `CDBA-POC/`.
  - Elle contient le site, sans fichiers cachés ni fichiers de serveur, et
    un `LISEZ-MOI.txt` (Windows et Mac, comptes, ce qui est simulé).
  - Elle ne contient ni `5-DOCS/` ni `5-DOCS/legal-brouillons/`.
  - Le lien canonique est retiré des pages de l'archive.
- **Non testé :** Safari en `file://`, et Windows lui-même.

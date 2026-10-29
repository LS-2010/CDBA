# Passer de la maquette à une vraie connexion

> Document de préparation : **rien de ceci n'est implémenté**. Aujourd'hui,
> `/connexion/` est une maquette : les champs n'ont pas d'attribut `name`,
> aucun script ne lit la saisie, rien n'est envoyé ni stocké.
> À valider par le bureau du club avant tout développement.

Sources lues le 21 octobre 2026 :

- **CNIL**, délibération n° 2022-100 du 21 juillet 2022, recommandation
  relative aux mots de passe (PDF officiel sur cnil.fr, lu par extraction
  du texte).
- **CNIL**, délibération n° 2020-091 du 17 septembre 2020, lignes
  directrices sur les cookies, article 5 (publiée au Journal officiel, lue
  sur legifrance.gouv.fr).
- **OWASP** : Password Storage Cheat Sheet, Authentication Cheat Sheet,
  Session Management Cheat Sheet (cheatsheetseries.owasp.org).
- **MDN** : « Turning off form autocompletion ».

Les pages HTML de cnil.fr répondaient « 503 Service Unavailable » pendant
cette recherche : seuls les deux textes ci-dessus ont pu être lus.

## 1. Hébergement

Un site statique ne peut pas vérifier un mot de passe. Il faut soit un
hébergement avec serveur (application et base de données), soit un service
d'authentification externe. **[À CHOISIR par le club]**, avec un contrat de
sous-traitance conforme au RGPD (voir `04-OBLIGATIONS-LEGALES.md`, point 9).

**HTTPS obligatoire sur tout le site**, pas seulement sur la page de connexion :

- OWASP Authentication : « The login page and all subsequent authenticated
  pages must be exclusively accessed over TLS ».
- OWASP Session Management : « essential to use an encrypted HTTPS (TLS)
  connection for the entire web session ». HSTS y est recommandé.
- CNIL 2022-100 : renvoie aux « Recommandations de sécurité relatives à
  TLS » de l'ANSSI.

## 2. Comptes créés par l'administrateur

- Aucune création de compte par les visiteurs. Les comptes sont créés par
  l'administrateur du club **[qui : À CONFIRMER]**.
- **Mot de passe initial provisoire, à changer à la première connexion.**
  CNIL 2022-100 (§ 29) : un dispositif qui génère des mots de passe
  « automatiquement ou par une personne initialisant le compte » « doit
  imposer leur modification à la première connexion ».
- **Remise du mot de passe initial.** CNIL 2022-100 (§ 33) : « À l'exception
  des envois par voie postale, les mots de passe ne doivent pas être
  communiqués à l'utilisateur en clair, notamment par courrier électronique.
  Seuls des mots de passe temporaires ou à usage unique devraient être
  communiqués aux utilisateurs. »
- **Mot de passe oublié :** réinitialisation par l'administrateur, qui remet
  à nouveau un mot de passe provisoire, à changer à la connexion suivante.
- **Pas de renouvellement périodique imposé.** CNIL 2022-100 (§ 54) : « Les
  responsables de traitement ne devraient plus imposer de modification
  périodique des mots de passe à l'ensemble de leurs utilisateurs. » OWASP
  Authentication : « Avoid requiring periodic password changes », mais
  rotation en cas de fuite.
- **Changer de mot de passe :** exiger une session ouverte et le mot de
  passe actuel (OWASP Authentication).

## 3. Stockage des mots de passe

Jamais en clair, ni avec un hachage rapide :

- CNIL 2022-100 : le mot de passe doit être « transformé au moyen d'une
  fonction cryptographique spécialisée, non réversible et sûre », intégrant
  « un « sel » et des paramètres relatifs aux coûts en temps et/ou en
  mémoire ».
- OWASP Password Storage : « Passwords should never be stored in plain
  text » ; « Fast hashing algorithms such as SHA-256 are not suitable for
  password storage ». Un sel unique par mot de passe.
- Algorithmes, par ordre de préférence OWASP :
  1. **Argon2id**, au moins 19 Mio de mémoire, 2 itérations, parallélisme 1 ;
  2. scrypt (N = 2^17, r = 8, p = 1) si Argon2id n'est pas disponible ;
  3. bcrypt, facteur de travail ≥ 10, pour les systèmes existants seulement ;
  4. PBKDF2-HMAC-SHA256, 600 000 itérations, si la conformité FIPS-140 est exigée.

Longueur minimale (OWASP Authentication) : moins de 8 caractères est jugé
faible avec double authentification, moins de 15 sans. Longueur maximale
d'au moins 64 caractères, sans troncature silencieuse. **[À DÉCIDER]** :
double authentification ou non. La CNIL 2022-100 fixe aussi des seuils
d'entropie selon les mesures en place ; ils n'ont pas été relevés en
détail ici **[À VÉRIFIER]**.

## 4. Limitation des tentatives

CNIL 2022-100, au choix ou en combinaison :

- une temporisation qui croît exponentiellement, « supérieure à une minute
  après cinq tentatives échouées », pour « au maximum 25 tentatives par
  24 heures » ;
- un nombre maximal de tentatives dans un délai donné (« par exemple,
  10 essais par heure ») ;
- un mécanisme contre les soumissions automatisées (captcha) ;
- un blocage du compte après un nombre d'échecs proportionné au risque.

OWASP Authentication : compter les échecs **par compte**, pas par adresse IP ;
journaliser les verrouillages ; éviter qu'un verrouillage serve à bloquer
un adhérent (déni de service). Message d'erreur générique, par exemple
« Identifiant ou mot de passe incorrect », que le compte existe ou non.

## 5. Cookie de session

OWASP Session Management :

- attributs `Secure`, `HttpOnly`, `SameSite=Strict` (ou `Lax`) ; préfixe
  `__Host-` (implique `Secure`, `Path=/`, pas de `Domain`) ;
- cookie non persistant si la connexion n'a pas à survivre à la fermeture
  du navigateur ;
- **nouvel identifiant de session après la connexion** (contre la fixation
  de session) et après tout changement de mot de passe ;
- expiration côté serveur : inactivité de 15 à 30 minutes pour une
  application à faible risque, et une durée absolue (exemple OWASP :
  4 à 8 heures) ;
- « Se déconnecter » doit invalider la session côté serveur ; supprimer le
  cookie ne suffit pas.

Consentement : la délibération CNIL 2020-091 (article 5) range parmi les
traceurs exemptés de consentement « les traceurs destinés à
l'authentification auprès d'un service ». Un tel cookie ne demande donc
pas de bandeau, s'il ne sert qu'à cela. Voir `12-CONFORMITE.md`.

## 6. Durée de conservation des comptes

**[À VÉRIFIER]** Aucune source sur la durée de conservation des comptes
n'a pu être lue pendant cette recherche (cnil.fr indisponible). Repère
noté en phase 1, à revérifier : le guide CNIL pour les associations évoque
la suppression des données trois ans après la fin de l'adhésion. Le bureau
doit fixer : suppression du compte à la fin de l'adhésion ou de la saison,
et durée de conservation des journaux de connexion.

## 7. Qui administre les comptes

**[À CONFIRMER]** Nom ou fonction de l'administrateur (le club en a un),
et la personne qui le remplace en son absence. À indiquer dans la
politique de confidentialité, parmi les personnes ayant accès aux données.

## 8. Gestionnaire de mots de passe et maquette

La maquette met `autocomplete="off"` sur les deux champs. MDN précise que
« many modern browsers do not support `autocomplete="off"` for login
fields » : un navigateur peut quand même proposer d'enregistrer la saisie.
C'est pourquoi le bandeau demande de ne saisir aucun vrai mot de passe.
MDN juge par ailleurs le gestionnaire de mots de passe du navigateur
« generally seen as a net gain for security ». Pour la vraie connexion, il
faudra donc retirer `off` et utiliser les valeurs `username` et
`current-password` (ou `new-password` au changement) **[À VÉRIFIER : seule
la valeur `new-password` figure dans la page MDN lue]**.

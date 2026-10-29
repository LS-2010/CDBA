# Conformité : cookies et liste « avant mise en ligne »

> À valider par un juriste ou le bureau du club.

## Cookies

**Aujourd'hui :** le site ne dépose aucun cookie ni traceur. C'est vrai
aussi pour la maquette de connexion (`/connexion/`), qui ne lit ni
n'enregistre rien. Il n'existe pas de page cookies séparée : l'information
figure dans la section « Cookies » du brouillon
`5-DOCS/legal-brouillons/politique-confidentialite.md`.

**Avec une vraie connexion :** l'espace adhérent posera un **cookie de
session**. Il faudra alors mettre à jour la section « Cookies » de la
politique de confidentialité (ou la page cookies si elle est créée) : nom
du cookie, finalité (maintenir la connexion), durée, et le fait qu'il n'est
utilisé pour rien d'autre.

**Pas de bandeau pour ce seul cookie.** Les lignes directrices de la CNIL
(délibération n° 2020-091 du 17 septembre 2020, article 5, publiée au
Journal officiel, lue sur legifrance.gouv.fr :
https://www.legifrance.gouv.fr/jorf/article_jo/JORFARTI000042388192)
rangent parmi les traceurs exemptés de consentement « les traceurs destinés
à l'authentification auprès d'un service ». Un cookie de session strictement
nécessaire à la connexion ne demande donc pas de bandeau de consentement, à
condition de ne servir qu'à cela. S'il servait aussi à une autre finalité
(statistiques, publicité), le consentement redeviendrait nécessaire pour
celle-ci.

Les pages HTML de cnil.fr répondaient « 503 Service Unavailable » le
21 octobre 2026 : la source lue est le texte officiel sur Légifrance.

## Avant mise en ligne

Liste à vérifier avant toute publication du site :

- [ ] **Remplacer la maquette de connexion par une vraie authentification
      (voir `13-VRAIE-AUTHENTIFICATION.md`), ou retirer `/connexion/` et
      `/espace-demo/` (voir `09-RETIRER-MAQUETTE.md`).**
- [ ] **Retirer les comptes fictifs de démonstration (Marie, Paul, Sophie), le
      fichier `3-CODE-SITE/js/demo-comptes.js` et les espaces de démonstration
      (voir `16-COMPTES-DEMO.md`).** Ces codes sont publics : ils ne doivent
      jamais protéger quoi que ce soit.
- [ ] Remplacer `domaine-a-confirmer.example` par le vrai domaine dans
      `3-CODE-SITE/robots.txt` et `3-CODE-SITE/sitemap.xml` (`11-RAPPORT-PHASE-5.md`).
- [ ] Faire valider les mentions légales et la politique de confidentialité
      par le bureau, puis remplacer les pages « en attente de validation »
      (`5-DOCS/legal-brouillons/`).
- [ ] Obtenir par écrit les droits du logo, qui porte la marque de la
      Fédération, et ceux de la photo de la murène (`03-A-FOURNIR.md`).
- [ ] Mettre à jour la section « Cookies » si un cookie, une statistique ou
      un outil tiers est ajouté (voir ci-dessus).
- [ ] Phase 9 : faire trancher les [À CONFIRMER] du compte rendu
      (`20-CR-FONCTIONNALITES.md`) :
      - niveaux (au moins un des deux), règle du DP (MEF2, IN) ;
      - stab conservée ou non ;
      - comptes créés par l'administrateur ou inscription libre ;
      - répartition moniteur / administrateur ;
      - lieu des fosses d'apnée et année du 6 juin (cdba.club) ;
      - écart du texte du forfait avec cdba.club.
- [ ] Phase 9 : remplir la fiche de traitement à partir de
      `22-INVENTAIRE-DONNEES.md` (finalités, accès, durées) et mettre à jour
      la politique de confidentialité en conséquence.
- [ ] Phase 9 : le profil, le mot de passe (espace adhérent), le mot de
      passe oublié (page `/connexion/`), les
      palanquées, les rôles et les forfaits sont simulés. Il leur faut un
      serveur : authentification réelle, base de données, envoi d'e-mails,
      droits vérifiés côté serveur. Choisir l'hébergeur
      (`20-CR-FONCTIONNALITES.md`, section Hébergement).
- [ ] Retirer `3-CODE-SITE/js/encadrement.js` avec les espaces de démonstration
      (`16-COMPTES-DEMO.md`) : il contient des personnes EXEMPLE.

## Tableau des 14 points (phase 6, 21 octobre 2026)

> Ce tableau ne conclut pas que le site est conforme. « Vérifié » signifie
> seulement que la preuve ci-dessous a été constatée par test sur la
> maquette locale (Chromium 153 et Firefox 155, 9 pages). Les statuts
> juridiques viennent de `04-OBLIGATIONS-LEGALES.md` et restent à valider
> par un juriste ou le bureau.

| # | Point | Statut | Preuve | Source officielle |
|---|-------|--------|--------|-------------------|
| 1 | Consentement des formulaires | à valider | Le formulaire de l'espace démo n'a plus de case de consentement (adhérent connecté) ; un lien vers la politique de confidentialité l'accompagne. Base légale [À CONFIRMER] : si le club retient le consentement, il faudra une case non précochée. Test : 0 case précochée. | [CNIL, bases légales : consentement](https://www.cnil.fr/fr/les-bases-legales/consentement) |
| 2 | Zéro donnée inutile | à valider | Le formulaire demande seulement niveau, taille de stab, date(s) et « moins de 18 ans » (oui ou non) ; nom et prénom viennent du compte. Test : 0 champ nom, prénom ou consentement. Pas de certificat médical en ligne. Le bureau doit confirmer que chaque donnée sert. | RGPD art. 5, voir `04-OBLIGATIONS-LEGALES.md` point 8 |
| 3 | Audit des outils tiers | vérifié (site) / à valider (hébergeur) | Test : 0 requête vers un autre domaine sur les 9 pages ; aucune police, aucun script ni aucune image externe. Hébergeur et service d'authentification [À COMPLÉTER] : contrat de sous-traitance à prévoir. | [CNIL, gérer la sous-traitance](https://www.cnil.fr/fr/securite-gerer-la-sous-traitance) |
| 4 | Zéro dark pattern | à valider | Aucune case précochée (test : 0), libellés d'action neutres, aucun compte à rebours ni message culpabilisant. Relecture humaine à faire. | [CNIL, consentement](https://www.cnil.fr/fr/les-bases-legales/consentement) ; [cahier IP n° 6](https://www.cnil.fr/sites/cnil/files/atoms/files/cnil_cahiers_ip6.pdf) |
| 5 | Zéro frais cachés | à valider | Tarifs publiés (70 € et 20 €) avec la liste des éléments non compris (consigne de 1 €, licence FFESSM, assurance). Montants licence et assurance [À CONFIRMER] ; modalités de paiement [À CONFIRMER]. | Code de la consommation, applicabilité à confirmer : `04-OBLIGATIONS-LEGALES.md` point 11 |
| 6 | Zéro faux avis | vérifié | Le site ne publie aucun avis ni témoignage. | [Code de la consommation, art. L121-4](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000044563107) |
| 7 | Zéro promesse non prouvée | à valider | Les textes ne reprennent que les faits fournis par le club ; aucun chiffre ni engagement ajouté. Relecture humaine à faire. | [Pratiques commerciales trompeuses, L121-2 à L121-4](https://www.legifrance.gouv.fr/codes/id/LEGISCTA000032227299) |
| 8 | Textes alternatifs | vérifié | Test : 0 image sans `alt` sur les 9 pages (375 et 1280 px). | Obligation légale à confirmer : `04-OBLIGATIONS-LEGALES.md` point 14 |
| 9 | Contraste | vérifié | Test : 0 texte sous 4,5:1 sur les 9 pages ; motif et verre calculés au pire pixel (`10-RAPPORT-PHASE-4.md`). | idem point 14 de `04` |
| 10 | Navigation clavier | vérifié (Chromium, Firefox) | Test : 41 à 45 éléments atteints à la tabulation par page, 0 sans contour de focus. Safari, VoiceOver et TalkBack non testés. | idem point 14 de `04` |
| 11 | Accord parental pour les mineurs | à valider | Question oui/non « moins de 18 ans » ; si oui, texte d'autorisation parentale [À CONFIRMER] (test : affiché seulement si « oui »). Démarche réelle non définie. | [CNIL, recommandation 4](https://www.cnil.fr/fr/recommandation-4-rechercher-le-consentement-dun-parent-pour-les-mineurs-de-moins-de-15-ans) |
| 12 | Lien de désinscription | non applicable | Aucun e-mail de prospection n'est envoyé. À revoir si une lettre d'information est créée. | [CPCE, art. L34-5](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000042155961/) |
| 13 | Licences des polices et images | à valider | Polices système (aucune licence nécessaire) ; logo et murène : droits [À CONFIRMER] (page Crédits). | [CPI, art. L122-4](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006278911) |
| 14 | Suppression des données | à valider | Procédure décrite dans la politique de confidentialité (écrire au contact, réponse sous un mois) ; contact et durée de conservation [À CONFIRMER] ; bouton « Demander la suppression » inactif dans la maquette. | [CNIL, droit à l'effacement](https://www.cnil.fr/fr/comprendre-mes-droits/le-droit-leffacement-supprimer-vos-donnees-en-ligne) |

Les liens cnil.fr répondaient « 503 » le 21 octobre 2026 : ils n'ont pas été
relus ce jour-là. Ils avaient été lus en phase 1 (`04-OBLIGATIONS-LEGALES.md`).

## Nouvelles données (phase 9, 21 octobre 2026)

Le compte rendu du club ajoute des données :
- covoiturage, véhicule et places hors chauffeur (inscription) ;
- date du certificat médical, visible des moniteurs et administrateurs ;
- forfait payé (administrateur) ;
- nombre de fosses de la saison ;
- rôle ;
- palanquées et DP ;
- adresse e-mail pour le mot de passe oublié.

Le point 2 du tableau (« zéro donnée inutile ») est donc à revoir : le
bureau doit confirmer que chaque donnée sert. La liste complète, avec les
finalités et les accès proposés, est dans `22-INVENTAIRE-DONNEES.md`. La
politique de confidentialité et les Conditions (pages du site et brouillon)
ont été complétées, toujours en version provisoire.

## Mineurs, dossiers et données de santé (phase 8, 21 octobre 2026)

> Rien n'est tranché ici à la place du club. Les options sont « à valider ».

### Sources lues (WebFetch, legifrance.gouv.fr)

- **Code du sport, art. L231-2** (version du 4 mars 2022) : pour les majeurs,
  la fédération peut conditionner la licence à un certificat médical ; pour
  les mineurs, la licence est subordonnée à l'attestation d'un questionnaire
  de santé rempli conjointement par le mineur et les personnes exerçant
  l'autorité parentale ; un certificat est exigé si les réponses conduisent
  à un examen médical.
  https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000045293846
- **Code du sport, art. L231-2-3** (version du 4 mars 2022) : pour les
  disciplines à contraintes particulières, certificat de moins d'un an,
  après un examen médical spécifique ; « il est tenu compte, le cas échéant,
  des spécificités des mineurs ».
  https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000042656303/
- **Code du sport, art. D231-1-5** (version du 3 septembre 2023) : la
  plongée subaquatique, « y compris souterraine », fait partie de ces
  disciplines. Art. D231-1-4-1 : questionnaire des mineurs ; si une réponse
  est positive, certificat de moins de six mois.
  https://www.legifrance.gouv.fr/codes/id/LEGISCTA000033168507
- **Loi n° 78-17, art. 45** (version du 1er juin 2019) : dès 15 ans, un mineur
  peut consentir seul pour les services de la société de l'information ; en
  dessous, consentement conjoint du mineur et du ou des titulaires de
  l'autorité parentale.
  https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000037823135

### Sources injoignables : [À VÉRIFIER]

Les pages CNIL « Questions-réponses sport amateur » et « Licences sportives :
les principales règles » répondaient « 503 Service Unavailable » : rien n'est
affirmé à partir d'elles. Points à vérifier sur cnil.fr :

- statut du certificat médical comme donnée de santé (catégorie particulière
  au sens du RGPD, art. 9) et conditions pour qu'un club le traite ;
- durée de conservation recommandée pour les certificats et les dossiers ;
- restriction d'accès aux données de santé.

### Ce que fait la maquette

- Dossier par adhérent : statut par pièce (fourni, à fournir, à vérifier) et
  date de validité d'exemple ; aucun téléversement, aucune image de document.
- « Moins de 18 ans » = oui : autorisation parentale obligatoire, forme
  [À CONFIRMER] ; pièce « à fournir » ajoutée au dossier ; inscription
  marquée incomplète.
- Accès indiqué dans la politique de confidentialité : moniteurs et
  administrateurs [À CONFIRMER : liste exacte].

### Options à valider par le club

1. Ne conserver que le **statut et la date de validité** de chaque pièce,
   jamais le certificat médical lui-même (la vérification se fait sur
   place). Minimise les données de santé.
2. Conserver le document jusqu'à la fin de la saison, puis le supprimer
   (durée [À CONFIRMER]) : exige un stockage sécurisé, un accès restreint et
   une base légale à définir.
3. Pour les mineurs : forme de l'autorisation parentale (papier signé,
   document type, autre) [À CONFIRMER] ; articulation entre le questionnaire
   de santé des mineurs (L231-2) et le certificat exigé pour la plongée
   (L231-2-3, D231-1-5) : à faire confirmer par la fédération.

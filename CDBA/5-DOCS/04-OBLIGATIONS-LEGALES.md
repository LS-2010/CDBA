# Phase 1 — Obligations légales applicables

> Recherche documentaire faite le 20 octobre 2026, uniquement sur des sources
> officielles (legifrance.gouv.fr, cnil.fr). Aucune page utile n'a été
> trouvée sur impots.gouv.fr, et service-public.fr / entreprises.gouv.fr n'ont
> rien donné d'exploitable pour ces points. Ce document n'est **pas un avis
> juridique** : il est **à valider par un juriste ou le bureau du club**.

## Hypothèses de départ (non confirmées)

- L'éditeur du site est une **association** (personne morale), dont la
  section plongée fait partie. Voir `03-A-FOURNIR.md`.
- Le site est **statique** et ne dépose **aucun cookie ni traceur**, à
  condition de ne pas intégrer d'outil tiers (statistiques, carte Google,
  vidéo YouTube, polices chargées depuis un serveur tiers…).
- Le formulaire collecte : nom, prénom, niveau, taille de stab, date(s) de
  fosse et un moyen de contact (à confirmer). Il ne collecte **pas** le
  certificat médical (donnée de santé), qui reste vérifié sur place.
- Pas de paiement en ligne ni d'e-mails pour l'instant.

Le cahier des charges annonce 19 points, mais la liste en contient 20.
Les 20 sont traités.

## Tableau

| # | Point | Statut | Fondement et source |
|---|-------|--------|---------------------|
| 1 | Mentions légales | **Obligatoire** | LCEN, art. 1-1 I (version en vigueur depuis le 23 mai 2024) : dénomination, siège social, téléphone, directeur de la publication, nom, adresse et téléphone de l'hébergeur. Le II permet à un éditeur **non professionnel** de ne donner que l'hébergeur ; son application à une association reste **à confirmer**. [Légifrance, art. 1-1](https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000049568614) — [CNIL, mentions légales](https://www.cnil.fr/fr/cnil-direct/question/les-mentions-legales-sur-un-site-web-est-ce-obligatoire) |
| 2 | Politique de confidentialité (RGPD) | **Obligatoire** dès que le formulaire collecte des données | Information des personnes (identité du responsable, finalités, données, droits). Les modalités d'exercice des droits doivent figurer dans les mentions légales ou la politique de confidentialité. [CNIL, droit à l'effacement](https://www.cnil.fr/fr/comprendre-mes-droits/le-droit-leffacement-supprimer-vos-donnees-en-ligne) — [CNIL, communiquer en ligne](https://www.cnil.fr/fr/rgpd-en-pratique-communiquer-en-ligne) |
| 3 | CGV / CGU | **À confirmer** | Les CGV relèvent du Code de la consommation, qui vise le « professionnel » (agissant dans le cadre d'une activité commerciale, industrielle, artisanale, libérale ou agricole). Qu'une association vendant des fosses à ses adhérents soit un professionnel est à trancher par un juriste. Les CGU ne sont imposées par aucun texte trouvé. À revoir si un paiement en ligne arrive. [Code de la consommation, article liminaire](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000049464063) |
| 4 | Droit de rétractation | **À confirmer**, probablement exclu | Il ne s'applique qu'entre un professionnel et un consommateur (voir n° 3). Même s'il s'applique, l'art. L221-28 12° l'exclut pour les « activités de loisirs qui doivent être fournies à une date ou à une période déterminée ». Dans ce cas, l'art. L221-5 impose d'**informer** que le droit ne s'applique pas. [L221-28](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000044563170) — [L221-5](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000053310511) |
| 5 | Politique cookies | **Non applicable** si aucun traceur | Sans traceur soumis à consentement, l'information n'est pas obligatoire mais elle est recommandée. Une phrase dans la politique de confidentialité suffit. [CNIL, mettre son site en conformité](https://www.cnil.fr/fr/cookies-et-autres-traceurs/regles/cookies/comment-mettre-mon-site-web-en-conformite) |
| 6 | Bandeau cookies | **Non applicable** si aucun traceur | Les traceurs exemptés « ne nécessitent pas de consentement des internautes ». Il devient **obligatoire** dès qu'un outil tiers non exempté est ajouté. [CNIL, mettre son site en conformité](https://www.cnil.fr/fr/cookies-et-autres-traceurs/regles/cookies/comment-mettre-mon-site-web-en-conformite) — [CNIL, mesure d'audience](https://www.cnil.fr/fr/cookies-solutions-pour-les-outils-de-mesure-daudience) |
| 7 | Consentement des formulaires | **À confirmer** (choix de la base légale) | Le consentement n'est qu'une des six bases légales. Pour gérer une inscription, l'exécution d'un contrat (adhésion) ou l'intérêt légitime peuvent convenir mieux. **Si** le club retient le consentement : case non précochée, acte positif clair, retrait aussi simple que l'accord. [CNIL, consentement](https://www.cnil.fr/fr/les-bases-legales/consentement) |
| 8 | Minimisation des données | **Obligatoire** | Principe du RGPD (art. 5) : ne collecter que ce qui est nécessaire à la finalité. La CNIL rappelle, pour le sport amateur, que la collecte doit être maîtrisée (certificats médicaux cités comme donnée sensible collectée par les clubs). [CNIL, sport amateur](https://www.cnil.fr/fr/sport-amateur-hors-contrat/tester-votre-conformite-au-rgpd) |
| 9 | Audit des outils tiers | **Obligatoire** | Un hébergeur ou un service de formulaire qui traite les données est un sous-traitant : contrat conforme à l'art. 28 du RGPD, vérification de la localisation des données (UE ou hors UE). La LCEN demande aussi d'identifier les tiers qui stockent des données. [CNIL, sous-traitance](https://www.cnil.fr/fr/securite-gerer-la-sous-traitance) — [CNIL, 6 bonnes pratiques](https://www.cnil.fr/fr/responsable-de-traitement-et-sous-traitant-6-bonnes-pratiques-pour-respecter-les-donnees) |
| 10 | Absence de dark patterns | **Obligatoire** pour tout consentement | Un design trompeur peut invalider le consentement. La présélection de choix est citée comme biais. Le règlement européen sur les services numériques (DSA) vise les plateformes en ligne : **non vérifié** dans cette session et a priori non applicable ici. [CNIL, cahier IP n° 6](https://www.cnil.fr/sites/cnil/files/atoms/files/cnil_cahiers_ip6.pdf) — [CNIL, consentement](https://www.cnil.fr/fr/les-bases-legales/consentement) |
| 11 | Absence de frais cachés | **À confirmer** (statut de professionnel) | Les règles sur l'information sur les prix relèvent du Code de la consommation (voir n° 3) ; leurs articles n'ont **pas été consultés** dans cette session. Exigence de la mission dans tous les cas : afficher 60 € / 20 € et la consigne de 1 €. |
| 12 | Absence de faux avis | **À confirmer** ; **non applicable en pratique** si le site ne publie aucun avis | L'art. L121-4 27° et 28° répute trompeurs les avis non vérifiés et les faux avis. Ces règles visent les pratiques commerciales d'un professionnel. Exigence de la mission dans tous les cas : aucun avis. [L121-4](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000044563107) |
| 13 | Absence de promesse non prouvée | **À confirmer** (statut de professionnel) | Pratiques commerciales trompeuses, art. L121-2 à L121-4. Exigence de la mission dans tous les cas : aucun chiffre ni fait inventé. [Sous-section pratiques trompeuses](https://www.legifrance.gouv.fr/codes/id/LEGISCTA000032227299) |
| 14 | Textes alternatifs | **À confirmer**, probablement non obligatoire légalement | L'art. 47 de la loi 2005-102 vise surtout les acteurs publics (liste complète du I **non vérifiée**). Les art. L412-13 et D412-49 et suivants du Code de la consommation visent certains services depuis le 28 juin 2025, avec une exemption des microentreprises (moins de 10 salariés et au plus 2 M€). Exigence de la mission dans tous les cas. [Art. 47](https://www.legifrance.gouv.fr/jorf/article_jo/JORFARTI000001290363) — [L412-13](https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006069565/LEGISCTA000047284895) |
| 15 | Contraste | **À confirmer**, idem n° 14 | Mêmes textes. Exigence de la mission : ≥ 4,5:1. |
| 16 | Navigation clavier | **À confirmer**, idem n° 14 | Mêmes textes. Exigence de la mission. |
| 17 | Accord parental pour les mineurs | **À confirmer** (présence de mineurs inconnue) | En France, en dessous de 15 ans, le traitement fondé sur le consentement dans un service en ligne exige l'accord conjoint du mineur et d'un titulaire de l'autorité parentale (loi Informatique et Libertés, art. 45). Pour une photo de mineur : autorisation **écrite** des parents. [CNIL, recommandation 4](https://www.cnil.fr/fr/recommandation-4-rechercher-le-consentement-dun-parent-pour-les-mineurs-de-moins-de-15-ans) — [CNIL, retrait de son image](https://www.cnil.fr/fr/demander-le-retrait-de-votre-image-en-ligne) |
| 18 | Lien de désinscription | **Non applicable** pour l'instant | Obligation liée aux e-mails de **prospection** (art. L34-5 du Code des postes et des communications électroniques). Aucun e-mail n'est prévu pour l'instant. À revoir si une lettre d'information est ajoutée. [L34-5](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000042155961/) — [CNIL, prospection](https://www.cnil.fr/fr/la-prospection-commerciale-par-courrier-electronique-sms-mms-et-automate-dappel) |
| 19 | Licences des polices et images | **Obligatoire** | Toute reproduction sans le consentement de l'auteur est illicite (CPI, art. L122-4). Pour les photos de personnes reconnaissables : droit à l'image (Code civil, art. 9), accord précisant les supports, l'objectif et la durée. [L122-4](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006278911) — [CNIL, retrait de son image](https://www.cnil.fr/fr/demander-le-retrait-de-votre-image-en-ligne) |
| 20 | Suppression des données | **Obligatoire** | Durée de conservation définie, puis destruction. Droit à l'effacement : réponse sous un mois, trois mois si la demande est complexe. Le guide CNIL pour les associations (ancien, **à revérifier**) indique une suppression trois ans après la fin de l'adhésion. [CNIL, conservation dans le sport amateur](https://www.cnil.fr/fr/sport-amateur-hors-contrat/tester-votre-conformite-au-rgpd/conservation-et-destruction) — [CNIL, droit à l'effacement](https://www.cnil.fr/fr/comprendre-mes-droits/le-droit-leffacement-supprimer-vos-donnees-en-ligne) — [Guide CNIL associations](https://www.cnil.fr/sites/cnil/files/atoms/files/cnil-guide_association.pdf) |

## Synthèse

- **Obligatoires** (7) : mentions légales, politique de confidentialité,
  minimisation, audit des outils tiers, absence de dark patterns dans tout
  consentement, licences des polices et images, suppression des données.
- **Non applicables dans la configuration prévue** (3) : politique cookies,
  bandeau cookies, lien de désinscription. Chacun redevient applicable si
  un outil tiers ou des e-mails de prospection sont ajoutés.
- **À confirmer** (10) : CGV/CGU, droit de rétractation, base légale du
  formulaire, frais cachés, faux avis, promesse non prouvée, textes
  alternatifs, contraste, navigation clavier, accord parental. La plupart
  dépendent de deux questions : **l'association est-elle un « professionnel »
  au sens du Code de la consommation ?** et **des mineurs s'inscrivent-ils ?**

Les points 10 à 16 sont de toute façon **exigés par le cahier des charges**
pour la phase 2, quelle que soit la réponse juridique.

## Limites de la recherche

- Les pages ont été lues par extraits (outil de recherche et de lecture
  automatique) ; les textes complets n'ont pas tous été ouverts.
- Non consultés : RGPD art. 5 et 13 dans leur texte intégral, art. 45 de la
  loi Informatique et Libertés, art. L112-1 du Code de la consommation,
  liste complète de l'art. 47 I de la loi 2005-102, décret n° 2026-816 du
  24 août 2026 (modifiant le décret accessibilité de 2019), DSA art. 25.
- Le guide CNIL pour les associations est ancien : la durée de trois ans
  est à revérifier.

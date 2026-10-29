# Inventaire des données (pour la fiche de traitement)

> Base de travail pour la fiche de traitement préparée par un autre membre.
> Ce document décrit ce que fait la maquette (phase 9) : il ne tire aucune
> conclusion juridique. Les accès sont la répartition proposée par la
> maquette (`20-CR-FONCTIONNALITES.md`), [À CONFIRMER] par le bureau.
> Aucune durée n'est fixée : toutes sont [À CONFIRMER].

Légende des accès :
- **L** : lecture ;
- **M** : modification ;
- **—** : aucun accès ;
- « ses données » : l'adhérent ne voit que ce qui le concerne.

| Donnée | Format (exemple fictif) | Saisie par | Finalité | Adhérent | Moniteur | Administrateur | Durée |
|--------|-------------------------|------------|----------|----------|----------|----------------|-------|
| Nom | texte (« Exemple ») | adhérent (profil) | identifier la personne, listes des inscrits | L, M (ses données) | L | L | [À CONFIRMER] |
| Prénom | texte (« Marie ») | adhérent (profil) | idem | L, M (ses données) | L | L | [À CONFIRMER] |
| Niveau de plongée | liste : Baptême … E4, ou aucun | adhérent (profil) [À CONFIRMER : validé par un moniteur ?] | palanquées, règle du DP | L, M (ses données) | L | L | [À CONFIRMER] |
| Niveau d'apnée | liste : AP … IN, ou aucun | adhérent (profil) [À CONFIRMER] | idem | L, M (ses données) | L | L | [À CONFIRMER] |
| Date du certificat médical | date (« 15 septembre 2026 ») [À CONFIRMER : délivrance ou fin de validité] | club (moniteur ou administrateur) [À CONFIRMER] | vérifier l'aptitude avant la fosse | L (son dossier) | L | L | [À CONFIRMER] |
| Statut des pièces du dossier | fourni / à fournir / à vérifier, avec date de validité | club | suivi du dossier | L (ses données) | L | L | [À CONFIRMER] |
| Forfait payé | oui / non | administrateur | suivi du paiement | [À CONFIRMER] | L | L, M | [À CONFIRMER] |
| Nombre de fosses de la saison | nombre (2) | club (calcul ou saisie [À CONFIRMER]) | suivi du forfait (priorité au-delà de 4 fosses) | L (ses données) | L | L | [À CONFIRMER] |
| Inscriptions | fosse choisie (date, plongée ou apnée) | adhérent | liste des inscrits par fosse | L (ses inscriptions) | L | L | [À CONFIRMER] |
| Taille de stab | XS à XL, propre stab, apnée [À CONFIRMER si conservée] | adhérent (inscription) | matériel à prévoir | L | [À CONFIRMER : non affichée dans les listes de la maquette] | [À CONFIRMER] | [À CONFIRMER] |
| Covoiturage | oui / non | adhérent (inscription) | organiser le covoiturage | L | L | L | [À CONFIRMER] |
| Véhicule | oui / non | adhérent (inscription) | idem | L | L | L | [À CONFIRMER] |
| Places disponibles | nombre, 0 à 8, hors chauffeur | adhérent (si véhicule = oui) | idem | L | L | L | [À CONFIRMER] |
| Moins de 18 ans | oui / non (pas de date de naissance) | adhérent (inscription) | exiger l'autorisation parentale | L | L (fiche) | L (fiche) | [À CONFIRMER] |
| Autorisation parentale | statut : à fournir / fourni (forme [À CONFIRMER]) | club | inscription d'un mineur | L (son dossier) | L | L | [À CONFIRMER] |
| Palanquées et DP | fosse → palanquées (moniteur, élèves), DP | moniteur ou administrateur | sécurité et organisation de la fosse | [À CONFIRMER] | L, M | L, M | [À CONFIRMER] |
| Compte : identifiant | texte (« marie ») | administrateur [À CONFIRMER : ou inscription libre ?] | connexion | L | — | L | [À CONFIRMER] |
| Compte : mot de passe | jamais lisible, empreinte seulement dans une vraie version (`13-VRAIE-AUTHENTIFICATION.md`) | adhérent | connexion | M | — | — | [À CONFIRMER] |
| Compte : adresse e-mail | adresse | [À CONFIRMER] | lien « mot de passe oublié » | L, M [À CONFIRMER] | — | L [À CONFIRMER] | [À CONFIRMER] |
| Compte : rôle | adhérent (par défaut) / moniteur / administrateur | administrateur | droits d'accès | L | — | L, M | [À CONFIRMER] |

- **Ce que la maquette ne contient pas :** pas de date de naissance, pas
  de document téléversé (certificat, licence), pas de paiement en ligne.
- **Aucune donnée réelle :** la maquette n'enregistre et n'envoie rien.
  Toutes les personnes affichées sont des EXEMPLES.
- **Données de santé :** le certificat médical relève d'une information de
  santé. Les pages CNIL correspondantes étaient injoignables
  (`12-CONFORMITE.md`) : [À VÉRIFIER].

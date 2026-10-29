# Retirer la maquette « espace adhérent » avant la mise en ligne

**Depuis la phase 7, la procédure complète est dans `16-COMPTES-DEMO.md`**
(quatre pages de démonstration, comptes fictifs, script `demo-comptes.js`).
Ce qui suit décrit l'état de la phase 4.

La maquette se composait de deux pages, accessibles seulement par leur
adresse directe :

- `3-CODE-SITE/connexion/index.html` (adresse locale : http://127.0.0.1:8091/connexion/)
- `3-CODE-SITE/espace-demo/index.html` (adresse locale : http://127.0.0.1:8091/espace-demo/)

Elles sont en `noindex, nofollow` et ne figurent ni dans `3-CODE-SITE/sitemap.xml`
ni dans `3-CODE-SITE/robots.txt`. Depuis la phase 6, la page publique « Inscription »
(`3-CODE-SITE/inscription.html`) contient un bouton « Se connecter » vers `connexion/` :
il faut le retirer (ou le faire pointer vers la vraie connexion) en même temps
que la maquette. Le formulaire d'inscription aux fosses vit désormais dans
`/espace-demo/` : le retirer supprime aussi ce formulaire.

## Étapes

1. Supprimer les deux dossiers :

   ```
   cd CDBA
   git rm -r 3-CODE-SITE/connexion 3-CODE-SITE/espace-demo
   ```

2. Vérifier qu'aucune page restante n'y renvoie (le résultat doit être vide) :

   ```
   grep -rn "connexion/\|espace-demo" 3-CODE-SITE/
   ```

3. Facultatif : supprimer les styles propres à la maquette dans
   `3-CODE-SITE/css/style.css`, c'est-à-dire le bloc commençant par le commentaire
   « Maquette de l'espace adhérent ». Les laisser ne gêne pas l'affichage.

4. Committer : `git commit -m "Retrait de la maquette espace adhérent"`.

Si un plan du site (`sitemap.xml`) est ajouté plus tard, il ne doit jamais
lister ces deux adresses.

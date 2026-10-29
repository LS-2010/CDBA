# Retirer la mention « Version provisoire » des pages légales

Les pages légales affichent « Version provisoire, en attente de validation
par le club » tant que le bureau n'a pas validé leur contenu. Cette mention
utilise une seule classe CSS : `version-provisoire`.

Pages concernées : `mentions-legales.html`, `confidentialite.html`,
`conditions.html`, `cookies.html`, `credits.html` (dans `3-CODE-SITE/`).

## Étapes, une fois le texte validé

1. Remplacer chaque `[À COMPLÉTER]` et `[À CONFIRMER]` par le texte validé :

   ```
   grep -rn "À COMPLÉTER\|À CONFIRMER" 3-CODE-SITE/
   ```

2. Retirer la mention, page par page, une fois la page validée :

   ```
   grep -rn 'class="version-provisoire"' 3-CODE-SITE/
   ```

   Supprimer chaque ligne `<p class="version-provisoire">…</p>` trouvée.

3. Quand plus aucune page ne l'utilise, supprimer le bloc `.version-provisoire`
   de `3-CODE-SITE/css/style.css`.

4. Mettre à jour la date « Dernière mise à jour » de la politique de
   confidentialité, puis committer.

"""Fabrique l'archive POC hors ligne (double-clic sur index.html, protocole file://) depuis 3-CODE-SITE/.

Usage : python3 -I 2-CODE-PYTHON/poc-hors-ligne.py 6-ZIP/CDBA-POC.zip
L'archive contient un dossier CDBA-POC/ : les pages, css/, js/, img/ et LISEZ-MOI.txt.
Ni fichiers cachés, ni fichiers de serveur (_headers, .htaccess, robots.txt, sitemap.xml), ni 5-DOCS/,
ni 5-DOCS/legal-brouillons/. La CSP du site est gardée telle quelle : elle fonctionne en file:// (phase 9).
"""
import os, re, sys, zipfile

SITE = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '3-CODE-SITE')
DEST = os.path.expanduser(sys.argv[1])
EXCLUS = {'_headers', 'robots.txt', 'sitemap.xml'}

LISEZ_MOI = '''CDBA, section plongée : maquette hors ligne (POC)
=================================================

Cette maquette du site s'ouvre sans internet et sans serveur.

OUVRIR LE SITE
1. Décompresser l'archive CDBA-POC.zip :
   - Windows : clic droit sur l'archive, puis « Extraire tout » ;
   - Mac : double-clic sur l'archive.
   N'ouvrez pas les pages depuis l'archive sans l'avoir décompressée.
2. Ouvrir le dossier CDBA-POC, puis double-cliquer sur index.html.
   La page s'ouvre dans le navigateur par défaut (Edge, Chrome, Firefox ou Safari).

Testé sur Mac avec Chromium (le moteur de Chrome et d'Edge) et Firefox.
Non testé : Safari, et Windows lui-même.

COMPTES DE DÉMONSTRATION (fictifs)
Page « Inscription », puis bouton « Se connecter » :
- marie / marie2026 : espace adhérent
- paul / paul2026 : espace moniteur
- sophie / sophie2026 : espace administrateur
Ne saisissez aucun vrai mot de passe.

CE QUI EST SIMULÉ
- La connexion : les trois comptes sont comparés dans le navigateur. Ce n'est pas une
  vraie authentification.
- Les personnes et les données affichées dans les espaces sont des EXEMPLES.
- Aucun formulaire n'envoie ni n'enregistre rien (inscription, profil, mot de passe).
  « Mot de passe oublié » n'envoie aucun e-mail.
- Palanquées, DP, rôles et forfaits restent en mémoire : ils sont perdus quand la page
  est rechargée ou fermée.
- Aucun cookie, aucun stockage dans le navigateur, aucune ressource chargée depuis internet.

Les mentions [À CONFIRMER], [À COMPLÉTER] et [À VÉRIFIER] signalent des informations
que le club doit encore fournir ou valider.
'''

fichiers = []
for dossier, sous, noms in os.walk(SITE):
    sous[:] = sorted(d for d in sous if not d.startswith('.'))
    for nom in sorted(noms):
        if nom.startswith('.') or nom in EXCLUS:
            continue
        chemin = os.path.join(dossier, nom)
        fichiers.append((chemin, 'CDBA-POC/' + os.path.relpath(chemin, SITE)))

with zipfile.ZipFile(DEST, 'w', zipfile.ZIP_DEFLATED) as z:
    for chemin, nom in fichiers:
        if nom.endswith('.html'):
            # Le lien canonique (« / ») ne sert qu'en ligne ; hors ligne il viserait la racine du disque.
            z.writestr(nom, re.sub(r'  <link rel="canonical" href="[^"]*">\n', '', open(chemin).read()))
        else:
            z.write(chemin, nom)
    # Fins de ligne Windows et marque UTF-8 : lisible dans le Bloc-notes comme dans TextEdit.
    z.writestr('CDBA-POC/LISEZ-MOI.txt', '﻿' + LISEZ_MOI.replace('\n', '\r\n'))

# Contrôles : liens explicites vers des fichiers, aucun fichier exclu, aucun chemin local.
with zipfile.ZipFile(DEST) as z:
    noms = z.namelist()
    assert 'CDBA-POC/index.html' in noms and 'CDBA-POC/LISEZ-MOI.txt' in noms
    assert not any(os.path.basename(n).startswith('.') or os.path.basename(n) in EXCLUS for n in noms), noms
    for n in noms:
        if n.endswith(('.html', '.js', '.css')):
            texte = z.read(n).decode()
            assert '/Users/' not in texte and not re.search(r'href="(?!https?:|mailto:|tel:|#)[^"]*/"', texte), n
print(f'{len(noms)} fichiers dans {DEST}')

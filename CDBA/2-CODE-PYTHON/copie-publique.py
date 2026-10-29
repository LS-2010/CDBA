"""Régénère la copie publique de démonstration (GitHub Pages) depuis 3-CODE-SITE/.

Usage : python3 -I 2-CODE-PYTHON/copie-publique.py 1-DEMO
Garde le dossier .git de la copie ; n'y copie ni fichiers cachés ni _headers
(GitHub Pages ne lit pas les en-têtes personnalisés). Voir 5-DOCS/17-COPIE-PUBLIQUE-GITHUB.md.
"""
import glob, os, re, subprocess, sys

SITE = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '3-CODE-SITE')
DEST = os.path.expanduser(sys.argv[1])
BANDEAU = '<p class="bandeau-demo-publique">Version de démonstration, non officielle. Contenu provisoire.</p>'
STYLE = '''
/* Copie publique de démonstration : bandeau présent en haut de chaque page (rouge du logo, blanc 4,93:1). */
.bandeau-demo-publique {
  margin: 0;
  padding: 0.6rem var(--gouttiere);
  background-color: var(--rouge);
  color: #ffffff;
  font-weight: 800;
  text-align: center;
}
'''

# --delete ne touche pas aux fichiers exclus : le .git de la copie est préservé.
subprocess.run(['rsync', '-a', '--delete', '--exclude=.*', '--exclude=_headers', '--exclude=sitemap.xml',
                SITE + '/', DEST + '/'], check=True)

pages = sorted(glob.glob(f'{DEST}/*.html') + glob.glob(f'{DEST}/*/index.html'))
for p in pages:
    s = open(p).read()
    s = re.sub(r'  <link rel="canonical" href="[^"]*">\n', '', s)
    if 'name="robots"' in s:
        s = re.sub(r'<meta name="robots" content="[^"]*">', '<meta name="robots" content="noindex, nofollow">', s)
    else:
        s = s.replace('  <meta name="theme-color"', '  <meta name="robots" content="noindex, nofollow">\n  <meta name="theme-color"', 1)
    assert s.count('<body>') == 1, p
    s = s.replace('<body>\n', f'<body>\n  {BANDEAU}\n', 1)
    open(p, 'w').write(s)
open(f'{DEST}/robots.txt', 'w').write('User-agent: *\nDisallow: /\n')
with open(f'{DEST}/css/style.css', 'a') as f:
    f.write(STYLE)

# Contrôles : aucune trace du domaine provisoire, de canonique ou de sitemap ; noindex et bandeau partout.
for p in pages:
    s = open(p).read()
    assert 'canonical' not in s and 'domaine-a-confirmer' not in s, p
    assert 'content="noindex, nofollow"' in s and s.count('bandeau-demo-publique') == 1, p
assert not os.path.exists(f'{DEST}/sitemap.xml')
print(f'{len(pages)} pages régénérées dans {DEST}')

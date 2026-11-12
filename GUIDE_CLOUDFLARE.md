# Atelier Sépia — Publication Cloudflare Pages (sans Bolt)

## À savoir
Ce ZIP contient le **code source** et non les fichiers compilés.
Il faut lancer une compilation pour créer le dossier `dist`.

## Méthode sans code : Cloudflare Pages + GitHub
1. Créer un dépôt GitHub privé ou public `atelier-sepia-demo`.
2. Décompresser le ZIP et envoyer **le contenu du dossier `project`** à la racine du dépôt GitHub (ne pas envoyer un dossier parent `project`).
3. Dans Cloudflare > Workers & Pages > Créer une application > Pages > Connecter Git.
4. Choisir le dépôt GitHub nouvellement créé.
5. Configurer :
   - Framework : `Vite` ou `None` (configuration manuelle ci-dessous).
   - Commande de build : `npm run build`
   - Répertoire de sortie : `dist`
   - Répertoire racine : `/`
   - Node.js : version 22 si un choix explicite est demandé.
6. Lancer le déploiement. Cloudflare installera les dépendances et compilera le site.

## Alternative sur un ordinateur avec Node.js
Dans le dossier project :
```sh
npm ci
npm run build
```
Puis envoyer le contenu du dossier `dist` dans un nouveau projet Cloudflare Pages (Direct Upload).

## Détails
- Démonstration : noindex volontaire et robots.txt avec `Disallow: /`.
- Aucune fonction de réservation réelle.
- Images externes (Pexels) et polices Google chargées à distance.
- Les métadonnées qui pointaient sur l'image Bolt ont été supprimées.
- Les tests de compilation ne sont **pas validés localement** : les dépendances npm n'ont pas pu être installées dans l'environnement de préparation.
- Vérifier visuellement la publication et réaliser un test Lighthouse après déploiement.

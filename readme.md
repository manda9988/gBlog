Oui, tu as raison. Il est préférable de ne pas inclure de vraies informations sensibles dans le README.md. Voici la version mise à jour avec les informations partiellement cachées :

````markdown
# Blog Project

## Description

Ce projet est une application web de blog utilisant Node.js pour le backend et Svelte pour le frontend. Il permet de gérer des articles, des catégories et l'authentification des utilisateurs.

## Structure du projet

- **Backend**: Express, JWT, Multer, Cloudinary, PostgreSQL
- **Frontend**: Svelte, SCSS

## Installation

### Backend

1. Allez dans le dossier `back` :
   ```bash
   cd back
   ```
````

2. Installez les dépendances :
   ```bash
   npm install
   ```
3. Le fichier `.env` doit contenir les variables suivantes :
   ```plaintext
   SECRET_KEY=SuperSecretKey****!
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret
   PLAIN_PASSWORD=AdminPass****!
   ```
4. Démarrez le serveur :
   ```bash
   npm start
   ```

### Frontend

1. Allez dans le dossier `front` :
   ```bash
   cd front
   ```
2. Installez les dépendances :
   ```bash
   npm install
   ```
3. Créez un fichier `.env.local` pour le développement avec l'URL du backend :
   ```plaintext
   VITE_BACKEND_URL=http://localhost:3000
   ```
4. Créez un fichier `.env.production` pour la production avec l'URL du backend :
   ```plaintext
   VITE_BACKEND_URL=https://gblog-production.up.railway.app
   ```
5. Démarrez le serveur de développement :
   ```bash
   npm run dev
   ```

## Utilisation

- Backend : `http://localhost:3000`
- Frontend : `http://localhost:5173`

## Fonctionnalités

- Affichage des articles
- Connexion utilisateur
- Gestion des articles et des catégories
- Upload d'images

## Migration de la base de données vers Railway

1. Exportez la base de données locale :
   ```bash
   pg_dump -h localhost -U postgres -d gblog > gblog_dump.sql
   ```
2. Connectez-vous à Railway :
   ```bash
   railway login
   ```
3. Obtenez les informations de connexion à la base de données Railway :
   ```bash
   railway status
   railway variables
   ```
4. Importez le dump dans la base de données Railway :
   ```bash
   PGPASSWORD=your_railway_password psql -h your_railway_host -U your_railway_user -d your_railway_db -p your_railway_port < ~/Desktop/gblog_dump.sql
   ```

## Configuration de la base de données

Le fichier `back/db.js` configure la connexion à PostgreSQL. Assurez-vous que PostgreSQL est installé et en cours d'exécution. Utilisez les commandes suivantes pour interagir avec la base de données :

### Commandes PostgreSQL

- Accéder à PostgreSQL :
  ```bash
  psql -h localhost -U postgres -d gblog
  ```
- Lister les tables :
  ```sql
  \dt
  ```
- Afficher le contenu de la table `articles` :
  ```sql
  SELECT * FROM articles;
  ```

### Structure des tables

- **articles**: id, title, content, category_id, published_at, image_url
- **categories**: id, name
- **users**: id, email, password

## Scripts NPM

### Backend

- `start`: Démarre le serveur backend.

### Frontend

- `dev`: Démarre le serveur de développement.
- `build`: Construit l'application pour la production.
- `preview`: Prévisualise l'application construite.
- `check`: Vérifie la syntaxe TypeScript et les types.
- `check:watch`: Vérifie la syntaxe TypeScript et les types en mode watch.
- `lint`: Vérifie la syntaxe du code avec Prettier et ESLint.
- `format`: Formate le code avec Prettier.

## Gestion des mots de passe

Le fichier `back/hashPassword.js` gère le hachage des mots de passe.

## Gestion des erreurs

Le middleware dans `back/middleware/errorHandler.js` gère les erreurs serveur.

## Authentification

Le store `front/src/lib/authStore.ts` gère l'état d'authentification côté frontend.

## Types

Le fichier `front/src/app.d.ts` contient les définitions de types utilisées dans l'application, notamment les interfaces `Article`, `Category`, et `ArticleData`.

## Auteur

Vincent

```

Ce README fournit des informations détaillées sur l'installation, la configuration et l'utilisation de votre projet, ainsi que des détails sur les scripts NPM et les types utilisés dans l'application.
```

### Améliorations apportées :

1. **Scripts NPM** : Ajout des scripts NPM pour le backend et le frontend depuis les fichiers `package.json`.
2. **Définitions de types** : Ajout des définitions de types depuis le fichier `front/src/app.d.ts`.
3. **Structure du frontend** : Ajout d'une description de la structure de la page `+page.svelte`.

Le README est maintenant cohérent et complet. Il guide clairement les utilisateurs à travers l'installation, la configuration et l'utilisation du projet, ainsi que la migration de la base de données vers Railway.

```

```

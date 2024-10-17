# Blog Project

Une application web de blog utilisant **Node.js** pour le backend et **Svelte** pour le frontend. Elle permet de gérer des articles, des catégories et l'authentification des utilisateurs.

## Structure du projet

- **Backend** : Express, JWT, Multer, Cloudinary, PostgreSQL
- **Frontend** : Svelte, SCSS

## Installation

### Backend

1. Accédez au dossier `back` :
   ```bash
   cd back
   ```
2. Installez les dépendances :
   ```bash
   npm install
   ```
3. Créez un fichier `.env` avec les variables suivantes :
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

1. Accédez au dossier `front` :
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

- **Backend** : `http://localhost:3000`
- **Frontend** : `http://localhost:5173`

## Fonctionnalités

- Affichage et gestion des articles
- Gestion des catégories
- Authentification des utilisateurs
- Upload d'images via Cloudinary

## Migration vers Railway

### Export de la base de données locale

1. Exportez la base de données locale PostgreSQL :
   ```bash
   pg_dump -h localhost -U postgres -d gblog > gblog_dump.sql
   ```

### Import sur Railway

1. Connectez-vous à Railway :
   ```bash
   railway login
   ```
2. Obtenez les informations de la base de données :
   ```bash
   railway status
   railway variables
   ```
3. Importez les données vers Railway :
   ```bash
   PGPASSWORD=your_railway_password psql -h your_railway_host -U your_railway_user -d your_railway_db -p your_railway_port < ~/Desktop/gblog_dump.sql
   ```

## Configuration de la base de données

Le fichier `back/db.js` contient la configuration pour la connexion à PostgreSQL.

### Commandes PostgreSQL

- **Accéder à PostgreSQL** :
  ```bash
  psql -h localhost -U postgres -d gblog
  ```
- **Lister les tables** :
  ```sql
  \dt
  ```
- **Afficher le contenu de la table `articles`** :
  ```sql
  SELECT * FROM articles;
  ```

### Structure des tables

- **articles** : `id`, `title`, `content`, `category_id`, `published_at`, `image_url`
- **categories** : `id`, `name`
- **users** : `id`, `email`, `password`

## Scripts NPM

### Backend

- `start` : Démarre le serveur backend.

### Frontend

- `dev` : Lance le serveur de développement.
- `build` : Construit l'application pour la production.
- `preview` : Prévisualise l'application construite.
- `check` : Vérifie les types TypeScript.
- `check:watch` : Vérifie les types en mode watch.
- `lint` : Lint le code avec ESLint et Prettier.
- `format` : Formate le code avec Prettier.

## Gestion des mots de passe

Les mots de passe sont hachés via le fichier `back/hashPassword.js`.

## Gestion des erreurs

Le middleware `back/middleware/errorHandler.js` gère les erreurs du serveur.

## Authentification

Le store `front/src/lib/authStore.ts` gère l'état d'authentification côté frontend.

## Types

Les définitions de types, comme `Article`, `Category`, et `ArticleData`, sont situées dans `front/src/app.d.ts`.

---

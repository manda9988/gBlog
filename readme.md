Voici un README.md simple et clair pour votre projet :

```markdown
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
2. Installez les dépendances :
   ```bash
   npm install
   ```
3. Créez un fichier `.env` et configurez les variables d'environnement :
   ```plaintext
   PORT=3000
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret
   SECRET_KEY=your_jwt_secret
   DATABASE_URL=your_database_url
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
3. Créez un fichier `.env` et configurez l'URL du backend :
   ```plaintext
   VITE_BACKEND_URL=http://localhost:3000
   ```
4. Démarrez le serveur de développement :
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

## Auteur
Vincent
```

Ce README fournit les informations essentielles pour installer, configurer et démarrer votre projet.
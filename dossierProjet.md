# Dossier de Projet

## 1. Introduction

Le projet "Blog Project" est une application web de gestion de blog utilisant Node.js pour le backend et Svelte pour le frontend. Ce projet a été développé pour permettre aux utilisateurs de gérer des articles, des catégories et l'authentification des utilisateurs de manière sécurisée et efficace.

### Contexte et Présentation du Projet

L'application a été conçue pour répondre aux besoins d'une entreprise fictive cherchant à offrir une plateforme de blog moderne et intuitive. Le projet a été développé en utilisant des technologies de pointe telles que Node.js, Express, JWT pour le backend et Svelte, SCSS pour le frontend. L'objectif principal était de créer une application performante et sécurisée, capable de gérer de manière fluide la création, la modification et la visualisation des articles de blog.

### Objectifs du Projet

Les objectifs du projet incluent :

- Développer une interface utilisateur intuitive et réactive.
- Implémenter une architecture backend robuste pour gérer les données des utilisateurs et des articles.
- Assurer la sécurité des données utilisateurs avec l'utilisation de JWT pour l'authentification.
- Faciliter la gestion des articles et des catégories par les utilisateurs.

Le projet suit une méthodologie de travail Agile/Scrum, permettant une adaptation continue aux besoins et aux retours des utilisateurs, garantissant ainsi une évolution progressive et cohérente de l'application.

## 2. Liste des compétences couvertes

### Développement front-end : Svelte, SCSS

Pour le développement front-end, nous avons utilisé Svelte et SCSS. Les fichiers clés illustrant ces compétences sont :

- **Svelte** :
  - `front/src/routes/articles/[id]/+page.svelte` : Ce fichier montre l'utilisation de Svelte pour créer une page d'article dynamique, y compris l'importation de données et la manipulation du DOM.
- **SCSS** :
  - `front/src/styles/global.scss` : Ce fichier démontre l'utilisation de SCSS pour la gestion des styles globaux, avec des importations de polices et des règles de style pour divers éléments HTML.

### Développement back-end : Node.js, Express, JWT, PostgreSQL

Pour le développement back-end, nous avons utilisé Node.js, Express, JWT et PostgreSQL. Les fichiers clés illustrant ces compétences sont :

- **Node.js et Express** :
  - `back/index.js` : Ce fichier montre la configuration du serveur Express, l'utilisation de middleware, et l'intégration des routes pour les articles, les catégories et l'authentification.
- **JWT (JSON Web Tokens)** :
  - `back/routes/auth.js` : Ce fichier montre comment les JWT sont utilisés pour gérer l'authentification des utilisateurs, y compris la génération de tokens et la protection des routes.
- **PostgreSQL** :
  - `back/db.js` : Ce fichier configure la connexion à la base de données PostgreSQL, illustrant l'intégration d'une base de données relationnelle dans l'application.
  - `back/routes/articles.js` : Ce fichier montre comment les données des articles sont manipulées dans la base de données, y compris les opérations CRUD (Create, Read, Update, Delete).

Ces compétences couvrent les principaux aspects du développement web moderne, garantissant une application performante, sécurisée et maintenable.

## 3. Contexte du projet

### Présentation de l'entreprise

Le projet "Blog Project" a été développé pour une entreprise fictive qui souhaite offrir une plateforme de blog moderne et intuitive. L'objectif est de permettre aux utilisateurs de créer, modifier et visualiser des articles de blog, tout en assurant une gestion efficace des catégories et une authentification sécurisée.

### Cahier des charges et user stories

Le cahier des charges du projet comprend les fonctionnalités suivantes :

- Création, modification et suppression d'articles.
- Gestion des catégories d'articles.
- Authentification des utilisateurs avec JWT.
- Téléchargement d'images pour les articles via Cloudinary.

#### User Stories

- En tant qu'utilisateur, je veux pouvoir m'inscrire et me connecter afin de gérer mes articles.
- En tant qu'utilisateur, je veux pouvoir créer, modifier et supprimer des articles.
- En tant qu'utilisateur, je veux pouvoir ajouter des images à mes articles.
- En tant qu'utilisateur, je veux pouvoir classer mes articles par catégories.

### Contraintes et livrables

Le projet devait respecter les contraintes suivantes :

- Utilisation de Node.js et Express pour le backend.
- Utilisation de Svelte et SCSS pour le frontend.
- Authentification sécurisée avec JWT.
- Stockage des images sur Cloudinary.
- Base de données PostgreSQL pour le stockage des données.
- Méthodologie de travail Agile/Scrum pour assurer une adaptation continue aux besoins.

### Environnement technique et humain

#### Environnement technique

- **Backend** : Node.js, Express, JWT, PostgreSQL, Cloudinary.
- **Frontend** : Svelte, SCSS.

#### Environnement humain

- Développeur backend : responsable de la configuration du serveur, de la gestion de la base de données et de l'authentification.
- Développeur frontend : responsable de la création des interfaces utilisateur, de l'intégration des API et de la gestion des styles.

### Méthodologie de travail : Agile/Scrum

Le projet a suivi la méthodologie Agile/Scrum, permettant une adaptation continue aux besoins et aux retours des utilisateurs. Les sprints ont été planifiés sur une base bi-hebdomadaire, avec des réunions de planification, des revues de sprint et des rétrospectives pour assurer une amélioration continue du processus de développement.

## 4. Réalisations front-end

### Présentation des maquettes et wireframes

Les maquettes et wireframes ont été conçues pour offrir une interface utilisateur intuitive et réactive. Elles définissent la structure et l'apparence de chaque page de l'application, permettant une navigation fluide et une expérience utilisateur optimale.

### Description des interfaces utilisateur

Les interfaces utilisateur ont été développées en utilisant Svelte et SCSS, garantissant ainsi une performance optimale et un style cohérent.

- **Page d'accueil** :
  - `front/src/routes/+page.svelte` : Cette page affiche une galerie des derniers articles publiés avec leurs images et titres.
- **Page d'article** :
  - `front/src/routes/articles/[id]/+page.svelte` : Cette page affiche le contenu complet d'un article sélectionné, y compris la date de publication et la catégorie.
- **Layout général** :
  - `front/src/routes/+layout.svelte` : Ce fichier définit la structure globale de l'application, incluant le titre, la navigation et le pied de page.

### Extraits de code statique et dynamique

- **Code statique** (SCSS) :
  - `front/src/styles/global.scss` : Ce fichier contient les styles globaux de l'application, incluant les polices, les couleurs et les styles de base pour les éléments HTML.

```scss
body {
  font-family: "Roboto", sans-serif;
  line-height: 1.6;
  background: rgb(238, 238, 238);
  ::selection {
    color: #222222;
    background: #e3e3e3;
  }
}
```

- **Code dynamique** (Svelte) :
  - `front/src/routes/+page.svelte` : Ce fichier contient le code Svelte pour afficher la liste des articles sur la page d'accueil.

```svelte
<script lang="ts">
  import type { Article } from '../app.d.ts';
  import '../styles/home.scss';
  import { onMount } from 'svelte';

  let articles: Article[] = [];

  const baseUrl = import.meta.env.VITE_BACKEND_URL;

  onMount(async () => {
    const response = await fetch(`${baseUrl}/articles/latest`);

    if (response.ok) {
      articles = await response.json();
    }
  });
</script>

<div class="gallery">
  {#each articles as article}
    <a href={`/articles/${article.id}`} class="article-preview" aria-label={`En savoir plus sur ${article.title}`}>
      {#if article.image_url}
        <img src={article.image_url} alt={`Image de ${article.title}`} class="article-image" />
      {/if}
      <p class="article-title">{article.title}</p>
    </a>
  {/each}
</div>
```

Ces extraits montrent l'utilisation de Svelte pour la logique dynamique et de SCSS pour les styles statiques, illustrant ainsi les compétences en développement front-end.

## 5. Réalisations back-end

### Présentation de la base de données

La base de données utilisée pour ce projet est PostgreSQL. Elle est configurée dans le fichier `db.js`, qui définit la connexion à la base de données à l'aide des informations d'environnement.

```javascript
// db.js

const { Pool } = require("pg");

const pool = new Pool({
  user: process.env.POSTGRES_USER || "postgres",
  host: process.env.PGHOST || "localhost",
  database: process.env.POSTGRES_DB || "gblog",
  port: process.env.PGPORT || 5432,
  password: process.env.POSTGRES_PASSWORD,
});

module.exports = pool;
```

### Extraits de code des composants métier et accès aux données

Les composants métier et l'accès aux données sont principalement gérés dans les fichiers de routes. Voici quelques exemples :

#### Gestion des articles (`articles.js`)

Ce fichier contient les routes pour la gestion des articles, y compris les opérations CRUD (Create, Read, Update, Delete) et le téléchargement d'images via Cloudinary.

```javascript
// back/articles.js

const express = require("express");
const pool = require("../db");
const router = express.Router();
const cloudinary = require("cloudinary").v2;
const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "blog_images",
    format: async (req, file) => {
      // Récupérer l'extension du fichier
      const ext = file.mimetype.split("/")[1];
      // Limiter les formats autorisés
      if (["jpg", "jpeg", "png", "gif"].includes(ext)) {
        return ext;
      }
      return "png"; // Par défaut, utiliser png
    },
    public_id: (req, file) => file.originalname,
  },
});

const upload = multer({ storage: storage });

router.get("/articles", async (_req, res, next) => {
  try {
    const allArticles = await pool.query(`
      SELECT articles.*, categories.name AS category_name, articles.image_url
      FROM articles
      JOIN categories ON articles.category_id = categories.id
      ORDER BY articles.published_at DESC
    `);
    res.json(allArticles.rows);
  } catch (err) {
    next(err);
  }
});

router.get("/articles/latest", async (_req, res, next) => {
  try {
    const latestArticles = await pool.query(`
      SELECT articles.*, categories.name AS category_name, articles.image_url
      FROM articles
      JOIN categories ON articles.category_id = categories.id
      ORDER BY articles.published_at DESC
      LIMIT 6
    `);
    res.json(latestArticles.rows);
  } catch (err) {
    next(err);
  }
});

router.get("/articles/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const articleQuery = `
      SELECT a.id, a.title, a.content, a.category_id, a.image_url, a.published_at, c.name as category_name
      FROM articles a
      JOIN categories c ON a.category_id = c.id
      WHERE a.id = $1`;
    const article = await pool.query(articleQuery, [id]);
    if (article.rows.length > 0) {
      res.json(article.rows[0]);
    } else {
      res.status(404).send("Article not found");
    }
  } catch (err) {
    next(err);
  }
});

router.delete("/articles/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleteQuery = "DELETE FROM articles WHERE id = $1";
    const result = await pool.query(deleteQuery, [id]);
    if (result.rowCount > 0) {
      res.json({ success: true, message: "Article deleted successfully." });
    } else {
      res.status(404).send({ success: false, message: "Article not found." });
    }
  } catch (err) {
    next(err);
  }
});

router.post("/upload", upload.single("image"), (req, res) => {
  if (req.file) {
    res.json({ imageUrl: req.file.path });
  } else {
    res.status(400).send("Image upload failed");
  }
});

router.post("/articles", async (req, res, next) => {
  try {
    const { title, category_id, content, image_url } = req.body;
    const insertQuery = `
      INSERT INTO articles (title, category_id, content, image_url, published_at) 
      VALUES ($1, $2, $3, $4, NOW()) 
      RETURNING *`;
    const newArticle = await pool.query(insertQuery, [
      title,
      category_id,
      content,
      image_url,
    ]);
    res.json(newArticle.rows[0]);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
```

#### Authentification des utilisateurs (`auth.js`)

Ce fichier gère l'authentification des utilisateurs, y compris la génération et la vérification des JSON Web Tokens (JWT).

```javascript
// back/routes/auth.js

const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const pool = require("../db");
require("dotenv").config();

const router = express.Router();
const SECRET_KEY = process.env.SECRET_KEY;

router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await pool.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);
    if (user.rows.length > 0) {
      const validPassword = await bcrypt.compare(
        password,
        user.rows[0].password
      );
      if (validPassword) {
        const token = jwt.sign({ userId: user.rows[0].id }, SECRET_KEY, {
          expiresIn: "1h",
        });
        res.json({ token });
      } else {
        res.status(401).send("Invalid credentials");
      }
    } else {
      res.status(401).send("Invalid credentials");
    }
  } catch (err) {
    next(err); // Passer l'erreur au middleware de gestion des erreurs
  }
});

// Middleware pour vérifier le token JWT
const authenticateJWT = (req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    jwt.verify(token, SECRET_KEY, (err, user) => {
      if (err) {
        return res.sendStatus(403); // Token invalide
      }
      req.user = user;
      next();
    });
  } else {
    res.sendStatus(401); // Aucun token fourni
  }
};

module.exports = { router, authenticateJWT };
```

Ces extraits montrent comment les données sont gérées côté serveur, illustrant les compétences en développement back-end.

## 6. Sécurité

### Mesures de sécurité mises en place et raisons

1. **Authentification avec JWT (JSON Web Tokens)**

   - **Implémentation** : Les utilisateurs se connectent via une route `/login` où leurs identifiants sont vérifiés. En cas de succès, un token JWT est généré et renvoyé au client.
   - **Raison** : Les JWT permettent une authentification sécurisée sans avoir besoin de stocker les sessions côté serveur. Ils sont signés avec une clé secrète, rendant difficile la falsification des tokens.
   - **Exemple de code** :

     ```javascript
     // back/routes/auth.js
     const jwt = require("jsonwebtoken");
     const SECRET_KEY = process.env.SECRET_KEY;

     router.post("/login", async (req, res, next) => {
       try {
         const { email, password } = req.body;
         const user = await pool.query("SELECT * FROM users WHERE email = $1", [
           email,
         ]);
         if (user.rows.length > 0) {
           const validPassword = await bcrypt.compare(
             password,
             user.rows[0].password
           );
           if (validPassword) {
             const token = jwt.sign({ userId: user.rows[0].id }, SECRET_KEY, {
               expiresIn: "1h",
             });
             res.json({ token });
           } else {
             res.status(401).send("Invalid credentials");
           }
         } else {
           res.status(401).send("Invalid credentials");
         }
       } catch (err) {
         next(err);
       }
     });
     ```

2. **Protection des routes avec JWT**

   - **Implémentation** : Les routes sensibles, telles que `/publish` et `/account`, sont protégées par un middleware qui vérifie la validité du token JWT.
   - **Raison** : Cela empêche les utilisateurs non authentifiés d'accéder à des fonctionnalités restreintes.
   - **Exemple de code** :

     ```javascript
     // back/routes/auth.js
     const authenticateJWT = (req, res, next) => {
       const token = req.headers.authorization;
       if (token) {
         jwt.verify(token, SECRET_KEY, (err, user) => {
           if (err) {
             return res.sendStatus(403); // Token invalide
           }
           req.user = user;
           next();
         });
       } else {
         res.sendStatus(401); // Aucun token fourni
       }
     };

     app.use("/publish", authenticateJWT);
     app.use("/account", authenticateJWT);
     ```

3. **Hachage des mots de passe**

   - **Implémentation** : Les mots de passe des utilisateurs sont hachés avant d'être stockés dans la base de données en utilisant `bcrypt`.
   - **Raison** : Le hachage des mots de passe garantit que même en cas de compromission de la base de données, les mots de passe des utilisateurs restent sécurisés.
   - **Exemple de code** :

     ```javascript
     // back/routes/auth.js
     const bcrypt = require("bcrypt");

     const hashPassword = async (password) => {
       const salt = await bcrypt.genSalt(10);
       return await bcrypt.hash(password, salt);
     };
     ```

4. **Middleware de gestion des erreurs**

   - **Implémentation** : Un middleware dédié capture les erreurs survenues dans l'application et renvoie une réponse générique tout en loguant les détails de l'erreur.
   - **Raison** : Fournir des messages d'erreur génériques empêche les attaquants d'obtenir des informations détaillées sur l'application, ce qui pourrait être utilisé pour des attaques ciblées.
   - **Exemple de code** :

     ```javascript
     // back/middleware/errorHandler.js
     function errorHandler(err, req, res, next) {
       console.error(err.stack);
       res.status(500).send({ error: "Server error" });
     }

     app.use(errorHandler);
     ```

5. **CORS (Cross-Origin Resource Sharing)**

   - **Implémentation** : Les requêtes sont restreintes aux domaines de confiance en utilisant le middleware `cors`.
   - **Raison** : Cela permet de protéger l'application contre certaines attaques de type cross-site request forgery (CSRF).
   - **Exemple de code** :

     ```javascript
     // back/index.js
     const cors = require("cors");

     const corsOptions = {
       origin: ["https://gblog-bice.vercel.app", "http://localhost:5173"],
       optionsSuccessStatus: 200,
     };

     app.use(cors(corsOptions));
     ```

Ces mesures de sécurité garantissent que l'application est protégée contre les accès non autorisés, les fuites de données et les attaques courantes.

## 7. Jeu d'essai

### Création et gestion des profils utilisateur

Pour tester la création et la gestion des profils utilisateur, nous avons effectué les étapes suivantes :

1. **Inscription et Connexion de l'utilisateur**

- **Description** : L'utilisateur peut s'inscrire et se connecter en utilisant son adresse e-mail et son mot de passe. Lors de la connexion, un token JWT est généré pour authentifier l'utilisateur.
- **Extraits de code** :

  - Backend (auth.js) :
    ```javascript
    // back/routes/auth.js
    router.post("/login", async (req, res, next) => {
      try {
        const { email, password } = req.body;
        const user = await pool.query("SELECT * FROM users WHERE email = $1", [
          email,
        ]);
        if (user.rows.length > 0) {
          const validPassword = await bcrypt.compare(
            password,
            user.rows[0].password
          );
          if (validPassword) {
            const token = jwt.sign({ userId: user.rows[0].id }, SECRET_KEY, {
              expiresIn: "1h",
            });
            res.json({ token });
          } else {
            res.status(401).send("Invalid credentials");
          }
        } else {
          res.status(401).send("Invalid credentials");
        }
      } catch (err) {
        next(err);
      }
    });
    ```
  - Frontend (login/+page.svelte) :

    ```svelte
    <!-- src/routes/login/+page.svelte -->
    <script lang="ts">
      import { goto } from '$app/navigation';
      import { isLoggedIn, startLogoutTimer, logout } from '../../lib/authStore';
      import '../../styles/login.scss';

      let email = '';
      let password = '';
      const baseUrl = import.meta.env.VITE_BACKEND_URL;

      async function login(event: Event) {
        event.preventDefault();
        const response = await fetch(`${baseUrl}/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email, password })
        });

        if (response.ok) {
          const data = await response.json();
          localStorage.setItem('token', data.token);
          isLoggedIn.set(true);
          startLogoutTimer();
          goto('/');
          alert('Connexion réussie');
        } else {
          alert('Échec de la connexion');
        }
      }
    </script>
    ```

2. **Accès au compte utilisateur et gestion des articles**

- **Description** : Une fois connecté, l'utilisateur peut accéder à son compte pour gérer ses articles. Il peut voir la liste de ses articles, supprimer un article ou accéder à d'autres fonctionnalités de gestion.
- **Extraits de code** :

  - Backend (auth.js) :
    ```javascript
    // Middleware pour vérifier le token JWT
    const authenticateJWT = (req, res, next) => {
      const token = req.headers.authorization;
      if (token) {
        jwt.verify(token, SECRET_KEY, (err, user) => {
          if (err) {
            return res.sendStatus(403); // Token invalide
          }
          req.user = user;
          next();
        });
      } else {
        res.sendStatus(401); // Aucun token fourni
      }
    };
    ```
  - Frontend (account/+page.svelte) :

    ```svelte
    <!-- src/routes/account/+page.svelte -->
    <script lang="ts">
      import { onMount } from 'svelte';
      import { goto } from '$app/navigation';
      import { isLoggedIn } from '../../lib/authStore';
      import type { Article } from '../../app.d.ts';
      import '../../styles/account.scss';

      let articles: Article[] = [];

      const baseUrl = import.meta.env.VITE_BACKEND_URL;

      onMount(() => {
        if (!$isLoggedIn) {
          goto('/login'); // Rediriger vers la page de login si non connecté
        }

        async function fetchArticles() {
          const response = await fetch(`${baseUrl}/articles`);
          if (response.ok) {
            articles = await response.json();
          } else {
            console.error('Failed to fetch articles:', await response.text());
          }
        }

        fetchArticles();
      });

      async function deleteArticle(articleId: number, articleTitle: string) {
        if (confirm(`Êtes-vous sûr de vouloir supprimer l'article "${articleTitle}" ?`)) {
          const response = await fetch(`${baseUrl}/articles/${articleId}`, {
            method: 'DELETE'
          });
          if (response.ok) {
            articles = articles.filter((article) => article.id !== articleId);
            alert('Article supprimé avec succès');
          } else {
            console.error('Failed to delete article:', await response.text());
          }
        }
      }
    </script>
    ```

### Jeu d'essai

1. **Données en entrée** : Email et mot de passe pour la connexion.
2. **Données attendues** : Génération d'un token JWT et redirection vers la page d'accueil.
3. **Données obtenues** : Token JWT généré et utilisateur redirigé.
4. **Analyse** : Le test est réussi si l'utilisateur est correctement authentifié et redirigé.

5. **Données en entrée** : Demande de suppression d'un article.
6. **Données attendues** : Suppression de l'article de la liste.
7. **Données obtenues** : Article supprimé de la liste.
8. **Analyse** : Le test est réussi si l'article est supprimé avec succès.

## 8. Veille sécurité

### Études de cas pratiques et résolutions de problèmes

1. **Problème : Authentification et sécurisation des endpoints**

- **Cas pratique** : Lors de la mise en place de l'authentification, il était essentiel de garantir que seuls les utilisateurs authentifiés puissent accéder à certaines routes de l'application. Pour ce faire, nous avons utilisé JSON Web Tokens (JWT).
- **Résolution** :

  - **Implémentation de l'authentification** : Les utilisateurs se connectent via une route `/login`. En cas de succès, un token JWT est généré et renvoyé au client.
  - **Protection des routes** : Les routes sensibles telles que `/publish` et `/account` sont protégées par un middleware qui vérifie la validité du token JWT.
  - **Extraits de code** :

    ```javascript
    // Route de login (auth.js)
    router.post("/login", async (req, res, next) => {
      try {
        const { email, password } = req.body;
        const user = await pool.query("SELECT * FROM users WHERE email = $1", [
          email,
        ]);
        if (user.rows.length > 0) {
          const validPassword = await bcrypt.compare(
            password,
            user.rows[0].password
          );
          if (validPassword) {
            const token = jwt.sign({ userId: user.rows[0].id }, SECRET_KEY, {
              expiresIn: "1h",
            });
            res.json({ token });
          } else {
            res.status(401).send("Invalid credentials");
          }
        } else {
          res.status(401).send("Invalid credentials");
        }
      } catch (err) {
        next(err);
      }
    });

    // Middleware de vérification du token JWT (auth.js)
    const authenticateJWT = (req, res, next) => {
      const token = req.headers.authorization;
      if (token) {
        jwt.verify(token, SECRET_KEY, (err, user) => {
          if (err) {
            return res.sendStatus(403); // Token invalide
          }
          req.user = user;
          next();
        });
      } else {
        res.sendStatus(401); // Aucun token fourni
      }
    };

    app.use("/publish", authenticateJWT);
    app.use("/account", authenticateJWT);
    ```

2. **Problème : Hachage des mots de passe**

- **Cas pratique** : Stocker les mots de passe en clair est une mauvaise pratique de sécurité. Il est crucial de hacher les mots de passe avant de les stocker dans la base de données.
- **Résolution** :

  - Utilisation de `bcrypt` pour hacher les mots de passe des utilisateurs avant de les stocker.
  - **Extraits de code** :

    ```javascript
    const bcrypt = require("bcrypt");

    const hashPassword = async (password) => {
      const salt = await bcrypt.genSalt(10);
      return await bcrypt.hash(password, salt);
    };
    ```

3. **Problème : Gestion des erreurs et exposition des informations**

- **Cas pratique** : Les messages d'erreur détaillés peuvent fournir des informations précieuses aux attaquants. Il est important de gérer les erreurs de manière sécurisée.
- **Résolution** :

  - Utilisation d'un middleware pour capturer les erreurs et renvoyer une réponse générique tout en loguant les détails de l'erreur pour les développeurs.
  - **Extraits de code** :

    ```javascript
    // Middleware de gestion des erreurs (errorHandler.js)
    function errorHandler(err, req, res, next) {
      console.error(err.stack);
      res.status(500).send({ error: "Server error" });
    }

    app.use(errorHandler);
    ```

4. **Problème : Contrôle de l'accès cross-origin (CORS)**

- **Cas pratique** : Pour empêcher les requêtes non autorisées provenant de domaines non approuvés, il est nécessaire de configurer les politiques CORS.
- **Résolution** :

  - Configuration du middleware CORS pour autoriser uniquement les domaines de confiance.
  - **Extraits de code** :

    ```javascript
    const cors = require("cors");

    const corsOptions = {
      origin: ["https://gblog-bice.vercel.app", "http://localhost:5173"],
      optionsSuccessStatus: 200,
    };

    app.use(cors(corsOptions));
    ```

Ces études de cas et les résolutions apportées montrent les efforts mis en place pour sécuriser l'application contre les menaces courantes. La veille sécurité continue d'être une priorité pour identifier et corriger les vulnérabilités à mesure qu'elles émergent.

## 9. Conclusion

### Bilan des réalisations

Le projet de blog a permis de mettre en œuvre une application web complète en utilisant une architecture moderne et des technologies robustes. Voici un récapitulatif des réalisations clés :

1. **Front-end** :

   - **Utilisation de Svelte et SCSS** : Le front-end a été développé en utilisant Svelte pour une expérience utilisateur réactive et SCSS pour une gestion efficace des styles.
   - **Maquettes et interfaces** : Création de maquettes et d'interfaces utilisateur dynamiques, intégration de composants réutilisables et responsive design pour s'adapter à différents appareils.

2. **Back-end** :

   - **Node.js et Express** : Mise en place d'un serveur back-end utilisant Node.js et Express pour gérer les requêtes HTTP.
   - **Base de données PostgreSQL** : Conception et gestion d'une base de données PostgreSQL pour stocker les articles, les catégories et les informations utilisateur.
   - **Authentification JWT** : Implémentation d'un système d'authentification sécurisé avec JWT pour protéger les routes sensibles.

3. **Sécurité** :
   - **Hachage des mots de passe** : Utilisation de bcrypt pour sécuriser les mots de passe des utilisateurs avant de les stocker dans la base de données.
   - **Middleware de gestion des erreurs** : Mise en place d'un middleware pour gérer et loguer les erreurs de manière sécurisée sans exposer de détails sensibles aux utilisateurs finaux.
   - **Configuration CORS** : Configuration des politiques CORS pour restreindre l'accès aux domaines de confiance uniquement.

### Résolution de problématiques

Le développement du projet a permis de surmonter plusieurs défis techniques et organisationnels, notamment :

1. **Gestion des utilisateurs** :

   - Mise en place d'un système de gestion des utilisateurs avec création de profils, connexion sécurisée et gestion des sessions utilisateur.

2. **Sécurité des données** :

   - Protection des données sensibles en utilisant des techniques de cryptographie pour les mots de passe et des tokens pour l'authentification.

3. **Performance et optimisation** :

   - Utilisation du middleware de compression pour optimiser les performances du serveur en réduisant la taille des réponses HTTP.

4. **Déploiement et environnement de développement** :
   - Configuration de l'environnement de développement avec des variables d'environnement et mise en place d'un workflow de déploiement continu.

### Conclusion générale

Ce projet a permis de renforcer les compétences en développement full-stack en utilisant des technologies modernes et des pratiques de sécurité rigoureuses. La réalisation de ce blog a non seulement démontré la capacité à créer une application web fonctionnelle et sécurisée, mais a également mis en évidence l'importance de la gestion de projet et de la collaboration pour mener à bien un projet complexe.

En conclusion, le projet de blog est une réussite technique et organisationnelle, et les leçons apprises au cours de ce développement seront précieuses pour les futurs projets professionnels.

## 10. Annexes

### MCD (Modèle Conceptuel de Données)

#### Tables principales :

- **articles**

  - id (INTEGER, PRIMARY KEY)
  - title (VARCHAR)
  - content (TEXT)
  - category_id (INTEGER, FOREIGN KEY)
  - image_url (VARCHAR)
  - published_at (TIMESTAMP)

- **categories**

  - id (INTEGER, PRIMARY KEY)
  - name (VARCHAR)

- **users**
  - id (INTEGER, PRIMARY KEY)
  - email (VARCHAR)
  - password (VARCHAR)

### Dictionnaire de données

#### Table : articles

| Colonne      | Type      | Description                        |
| ------------ | --------- | ---------------------------------- |
| id           | INTEGER   | Identifiant unique de l'article    |
| title        | VARCHAR   | Titre de l'article                 |
| content      | TEXT      | Contenu de l'article               |
| category_id  | INTEGER   | Référence vers la table catégories |
| image_url    | VARCHAR   | URL de l'image de l'article        |
| published_at | TIMESTAMP | Date et heure de publication       |

#### Table : categories

| Colonne | Type    | Description                        |
| ------- | ------- | ---------------------------------- |
| id      | INTEGER | Identifiant unique de la catégorie |
| name    | VARCHAR | Nom de la catégorie                |

#### Table : users

| Colonne  | Type    | Description                         |
| -------- | ------- | ----------------------------------- |
| id       | INTEGER | Identifiant unique de l'utilisateur |
| email    | VARCHAR | Email de l'utilisateur              |
| password | VARCHAR | Mot de passe de l'utilisateur       |

## 11. Glossaire des termes techniques

### INTEGER

- **Définition** : Un type de données utilisé pour représenter des nombres entiers.
- **Exemple** : `id INTEGER` définit une colonne "id" qui stocke des nombres entiers.

### PRIMARY KEY

- **Définition** : Une contrainte qui identifie de manière unique chaque enregistrement dans une table.
- **Exemple** : `id INTEGER PRIMARY KEY` indique que la colonne "id" est la clé primaire et doit contenir des valeurs uniques pour chaque enregistrement.

### FOREIGN KEY

- **Définition** : Une contrainte utilisée pour lier deux tables ensemble. Une clé étrangère dans une table pointe vers une clé primaire dans une autre table.
- **Exemple** : `category_id INTEGER, FOREIGN KEY (category_id) REFERENCES categories(id)` lie la colonne "category_id" de la table "articles" à la colonne "id" de la table "categories".

### VARCHAR

- **Définition** : Un type de données utilisé pour stocker des chaînes de caractères (texte) de longueur variable.
- **Exemple** : `title VARCHAR(255)` définit une colonne "title" qui peut contenir jusqu'à 255 caractères.

### TIMESTAMP

- **Définition** : Un type de données utilisé pour stocker des informations de date et d'heure.
- **Exemple** : `published_at TIMESTAMP` définit une colonne "published_at" qui enregistre la date et l'heure de publication d'un article.

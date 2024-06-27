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

```

```

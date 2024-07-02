// src/app.d.ts

// Article est utilisé pour les articles complets récupérés de la base de données.Cela clarifie et sécurise les différentes opérations sur les articles.

// ArticleData simplifie la création des articles en excluant les champs générés automatiquement (id, published_at).

// Ce fichier définit les interfaces TypeScript pour les structures de données utilisées dans l'application.

// Elles permettent de typer les données des articles et des catégories, assurant ainsi une manipulation sûre et cohérente des données.

// Interface représentant un article
export interface Article {
	id: number; // Identifiant unique de l'article
	title: string; // Titre de l'article
	content: string;
	category_id: number;
	category_name?: string;
	published_at: string;
	image_url?: string; // URL de l'image associée à l'article (facultatif)
}

// Interface représentant les données d'un article lors de sa création
export interface ArticleData {
	title: string;
	category_id: number;
	content: string;
	image_url?: string;
}

// Interface représentant une catégorie
export interface Category {
	id: number;
	name: string;
}

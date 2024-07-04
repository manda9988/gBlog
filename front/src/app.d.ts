// src/app.d.ts

// Interface représentant un article
export interface Article {
	id: number; // Identifiant unique de l'article
	title: string; // Titre de l'article
	content: string;
	category_id: number;
	category_name?: string;
	published_at: string;
	image_url?: string;
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

// src/app.d.ts
export interface Article {
	id: number;
	title: string;
	content: string;
	category_id: number;
	category_name?: string;
	published_at: string;
	image_url?: string; // Ajouter image_url ici
}

export interface Category {
	id: number;
	name: string;
}

export interface ArticleData {
	title: string;
	category_id: number;
	content: string;
	image_url?: string; // Ajouter image_url ici
}

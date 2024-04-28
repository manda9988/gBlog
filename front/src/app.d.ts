// src/app.d.ts
export interface Article {
	id: number;
	title: string;
	content: string;
	category_id: number;
	category_name?: string;
	published_at: string;
}

export interface Category {
	id: number;
	name: string;
}

export interface ArticleData {
	title: string;
	category_id: number;
	content: string;
}

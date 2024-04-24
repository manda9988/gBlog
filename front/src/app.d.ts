// src/app.d.ts
export interface Article {
	id: number;
	title: string;
	content: string;
	category_id: number;
	category_name?: string;
	published_at: string;
}

<!-- front/src/routes/articles/[id]/+page.svelte -->

<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import type { Article } from '../../../app.d.ts';
	import '../../../styles/article-detail.scss';

	let article: Article | undefined;

	// Nouvelle URL dynamique basée sur les variables d'environnement
	const baseUrl = import.meta.env.VITE_BACKEND_URL;

	onMount(async () => {
		const id = $page.params.id;
		const response = await fetch(`${baseUrl}/articles/${id}`);
		if (response.ok) {
			article = await response.json();
		} else {
			console.error('Failed to fetch article:', await response.text());
		}
	});

	function formatDate(dateString: string): string {
		const date = new Date(dateString);
		const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
		return `${date.toLocaleDateString('fr-FR', options)}`;
	}
</script>

<svelte:head>
	<title>Article détails - Blog_</title>
</svelte:head>

{#if article}
	<article>
		<div class="article-header">
			<p class="article-date">Publié le {formatDate(article.published_at)}</p>
			<p class="article-category">Catégorie: {article.category_name}</p>
		</div>
		<h1>{article.title}</h1>
		<p>{article.content}</p>
	</article>
{:else}
	<p>Loading article or article not found...</p>
{/if}

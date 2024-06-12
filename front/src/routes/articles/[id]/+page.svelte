<!-- front/src/routes/articles/[id]/+page.svelte -->

<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import type { Article } from '../../../app.d.ts';
	import '../../../styles/id.scss';

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
		const options: Intl.DateTimeFormatOptions = {
			year: 'numeric',
			month: 'numeric',
			day: 'numeric'
		};
		return `${date.toLocaleDateString('fr-FR', options)}`;
	}
</script>

<svelte:head>
	<title>Article | Blog_</title>
	<meta name="description" content="Article | Blog_" />
</svelte:head>

{#if article}
	<article class="articleID">
		<h1>{article.title}</h1>

		<div class="articleInfos">
			<p class="article-date">
				{formatDate(article.published_at)} | {article.category_name}
			</p>
		</div>
		{#if article.image_url}
			<img src={article.image_url} alt={`Image de ${article.title}`} class="article-image" />
		{/if}

		<p>{@html article.content.replace(/\n/g, '<br>')}</p>
	</article>
{:else}
	<p>Loading article or article not found...</p>
{/if}

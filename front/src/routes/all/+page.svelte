<!-- src/routes/all/+page.svelte -->

<script lang="ts">
	import type { Article } from '../../app.d.ts';
	import '../../styles/home.scss';
	import { onMount } from 'svelte';

	let articles: Article[] = [];

	// Nouvelle URL dynamique basée sur les variables d'environnement
	const baseUrl = import.meta.env.VITE_BACKEND_URL;

	onMount(async () => {
		const response = await fetch(`${baseUrl}/articles`);
		if (response.ok) {
			articles = await response.json();
		}
	});
</script>

<svelte:head>
	<title>Tous les articles | Blog_</title>
	<meta name="description" content="Tous les articles | Blog_" />
</svelte:head>

<div class="gallery">
	{#each articles as article}
		<a
			href={`/articles/${article.id}`}
			class="article-preview"
			aria-label={`Read more about ${article.title}`}
		>
			{#if article.image_url}
				<img src={article.image_url} alt={`Image de ${article.title}`} class="article-image" />
			{/if}
			<p class="article-title">{article.title}</p>
		</a>
	{/each}
</div>

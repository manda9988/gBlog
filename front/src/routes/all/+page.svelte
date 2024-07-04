<!-- src/routes/all/+page.svelte -->

<script lang="ts">
	import type { Article } from '../../app.d.ts';
	import '../../styles/home.scss';
	import { onMount } from 'svelte';

	let articles: Article[] = [];

	// URL dynamique basée sur les variables d'environnement
	const baseUrl = import.meta.env.VITE_BACKEND_URL;

	// Code à exécuter après le montage du composant
	onMount(async () => {
		// Requête pour récupérer les articles
		const response = await fetch(`${baseUrl}/articles`);
		if (response.ok) {
			// Mettre à jour les articles si la requête est réussie
			articles = await response.json();
		}
	});
</script>

<!-- Section <head> du document HTML avec titre et les meta-données -->
<svelte:head>
	<!-- Titre de la page -->
	<title>Tous les articles | Blog_</title>
	<!-- Description de la page pour le SEO -->
	<meta name="description" content="Tous les articles | Blog_" />
</svelte:head>

<div class="gallery">
	<!-- Boucle pour afficher chaque article -->
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

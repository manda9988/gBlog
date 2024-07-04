<!-- src/routes/+page.svelte -->

<script lang="ts">
	// Importation du type Article
	import type { Article } from '../app.d.ts';
	import '../styles/home.scss';
	import { onMount } from 'svelte';

	// Déclaration d'un tableau pour stocker les articles
	let articles: Article[] = [];

	// URL de base pour les requêtes API
	const baseUrl = import.meta.env.VITE_BACKEND_URL;

	// Code à exécuter après le montage du composant
	onMount(async () => {
		// Requête pour récupérer les derniers articles
		const response = await fetch(`${baseUrl}/articles/latest`);

		if (response.ok) {
			// Remplir le tableau articles avec les données récupérées depuis le serveur
			articles = await response.json();
		}
	});
</script>

<svelte:head>
	<title>Accueil | Blog_</title>
	<meta name="description" content="Bienvenue sur la page d'accueil de Blog_" />
</svelte:head>

<div class="gallery">
	<!-- Boucle pour afficher chaque article -->
	{#each articles as article}
		<a
			href={`/articles/${article.id}`}
			class="article-preview"
			aria-label={`En savoir plus sur ${article.title}`}
		>
			{#if article.image_url}
				<!-- Afficher l'image de l'article si elle existe -->
				<img src={article.image_url} alt={`Image de ${article.title}`} class="article-image" />
			{/if}
			<p class="article-title">{article.title}</p>
		</a>
	{/each}
</div>

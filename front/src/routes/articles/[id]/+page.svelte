<!-- front/src/routes/articles/[id]/+page.svelte -->

<script lang="ts">
	// Importation de onMount pour exécuter du code après le montage du composant
	import { onMount } from 'svelte';
	// Importation du store pour obtenir des informations sur la page actuelle
	import { page } from '$app/stores';
	// Importation du type Article
	import type { Article } from '../../../app.d.ts';
	import '../../../styles/id.scss';

	let article: Article | undefined; // Déclaration de la variable article

	// URL dynamique basée sur les variables d'environnement
	const baseUrl = import.meta.env.VITE_BACKEND_URL;

	onMount(async () => {
		// Récupérer l'ID de l'article depuis les paramètres de la page
		const id = $page.params.id;
		// Requête pour récupérer l'article par ID
		const response = await fetch(`${baseUrl}/articles/${id}`);
		if (response.ok) {
			// Mettre à jour l'article si la requête est réussie
			article = await response.json();
		} else {
			console.error('Failed to fetch article:', await response.text());
		}
	});

	// Fonction pour formater la date
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

<!-- Section pour définir des éléments dans le <head> du document HTML, comme le titre et les meta-données -->
<svelte:head>
	<!-- Titre de la page -->
	<title>Article | Blog_</title>
	<!-- Description de la page pour le SEO -->
	<meta name="description" content="Article | Blog_" />
</svelte:head>

<!-- Afficher l'article si disponible -->
{#if article}
	<article class="articleID">
		<h1>{article.title}</h1>

		<div class="articleInfos">
			<!-- Afficher la date et la catégorie de l'article -->
			<p class="article-date">
				{formatDate(article.published_at)} | {article.category_name}
			</p>
		</div>
		{#if article.image_url}
			<img src={article.image_url} alt={`Image de ${article.title}`} class="article-image" />
		{/if}

		<!-- Afficher le contenu de l'article avec les sauts de ligne -->
		<p>{@html article.content.replace(/\n/g, '<br>')}</p>
	</article>
{:else}
	<!-- Message de chargement si l'article n'est pas encore disponible -->

	<p>Loading article or article not found...</p>
{/if}

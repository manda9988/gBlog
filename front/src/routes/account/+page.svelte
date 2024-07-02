<!-- src/routes/account/+page.svelte -->

<script lang="ts">
	// Importation de onMount pour exécuter du code après le montage du composant
	import { onMount } from 'svelte';
	// Importation de goto pour la navigation
	import { goto } from '$app/navigation';
	// Importation du store pour vérifier si l'utilisateur est connecté
	import { isLoggedIn } from '../../lib/authStore';
	// Importation du type Article
	import type { Article } from '../../app.d.ts';
	// Importation des styles
	import '../../styles/account.scss';

	// Déclaration d'un tableau pour stocker les articles
	let articles: Article[] = [];

	// URL dynamique basée sur les variables d'environnement
	const baseUrl = import.meta.env.VITE_BACKEND_URL;

	// Code à exécuter après le montage du composant
	onMount(() => {
		if (!$isLoggedIn) {
			// Rediriger vers la page de login si non connecté
			goto('/login');
		}

		// Fonction pour récupérer les articles
		async function fetchArticles() {
			const response = await fetch(`${baseUrl}/articles`);
			if (response.ok) {
				// Mettre à jour les articles si la requête est réussie
				articles = await response.json();
			} else {
				// Afficher une erreur en cas d'échec
				console.error('Failed to fetch articles:', await response.text());
			}
		}

		fetchArticles(); // Appeler la fonction pour récupérer les articles
	});

	// Fonction pour supprimer un article
	async function deleteArticle(articleId: number, articleTitle: string) {
		if (confirm(`Êtes-vous sûr de vouloir supprimer l'article "${articleTitle}" ?`)) {
			const response = await fetch(`${baseUrl}/articles/${articleId}`, {
				method: 'DELETE'
			});
			if (response.ok) {
				// Mettre à jour la liste des articles
				articles = articles.filter((article) => article.id !== articleId);
				alert('Article supprimé avec succès');
			} else {
				console.error('Failed to delete article:', await response.text());
			}
		}
	}
</script>

<!-- Section pour définir des éléments dans le <head> du document HTML, comme le titre et les meta-données -->
<svelte:head>
	<!-- Titre de la page -->
	<title>Compte Utilisateur | Blog_</title>
	<!-- Description de la page pour le SEO -->
	<meta name="description" content="Compte Utilisateur | Blog_" />
</svelte:head>

<section class="account-section">
	<!-- Grille pour afficher les articles de l'utilisateur -->
	<div class="articles-grid">
		<div class="grid-header">Titre</div>
		<div class="grid-header">Catégorie</div>
		<div class="grid-header">Date</div>
		<div class="grid-header">Actions</div>
		<!-- Boucle pour afficher chaque article -->
		{#each articles as article (article.id)}
			<div class="grid-item">{article.title}</div>
			<div class="grid-item">{article.category_name}</div>
			<div class="grid-item">{new Date(article.published_at).toLocaleDateString()}</div>
			<div class="grid-item">
				<button class="delete-button" on:click={() => deleteArticle(article.id, article.title)}
					>Supprimer</button
				>

				<button class="edit-button" disabled>Modifier</button>
			</div>
		{/each}
	</div>
</section>

<!-- src/routes/account/+page.svelte -->

<script lang="ts">
	import { onMount } from 'svelte';
	import type { Article } from '../../app.d.ts';
	import '../../styles/account.scss';

	let articles: Article[] = [];

	// Ajout de la baseUrl pour utiliser les variables d'environnement
	const baseUrl = import.meta.env.VITE_BACKEND_URL;

	onMount(async () => {
		// Utilisation de baseUrl dans l'appel fetch
		const response = await fetch(`${baseUrl}/articles`);
		if (response.ok) {
			articles = await response.json();
		} else {
			console.error('Failed to fetch articles:', await response.text());
		}
	});

	async function deleteArticle(articleId: number) {
		if (confirm('Êtes-vous sûr de vouloir supprimer cet article ?')) {
			// Utilisation de baseUrl dans l'appel fetch
			const response = await fetch(`${baseUrl}/articles/${articleId}`, {
				method: 'DELETE'
			});
			if (response.ok) {
				articles = articles.filter((article) => article.id !== articleId);
			} else {
				console.error('Failed to delete article:', await response.text());
			}
		}
	}
	function logout() {
		// Logique de déconnexion ici
		console.log('Déconnexion');
	}
</script>

<section class="account-section">
	<button class="logout-button" on:click={logout}>Déconnexion</button>

	<div class="articles-grid">
		<div class="grid-header">Titre</div>
		<div class="grid-header">Catégorie</div>
		<div class="grid-header">Date</div>
		<div class="grid-header">Actions</div>
		{#each articles as article (article.id)}
			<div class="grid-item">{article.title}</div>
			<div class="grid-item">{article.category_name}</div>
			<div class="grid-item">{new Date(article.published_at).toLocaleDateString()}</div>
			<div class="grid-item">
				<button class="delete-button" on:click={() => deleteArticle(article.id)}>Supprimer</button>
				<button class="edit-button" disabled>Modifier</button>
			</div>
		{/each}
	</div>
</section>

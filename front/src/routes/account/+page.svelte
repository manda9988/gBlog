<!-- src/routes/account/+page.svelte -->

<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { isLoggedIn } from '../../lib/authStore';
	import type { Article } from '../../app.d.ts';
	import '../../styles/account.scss';

	let articles: Article[] = [];

	const baseUrl = import.meta.env.VITE_BACKEND_URL;

	onMount(() => {
		if (!$isLoggedIn) {
			goto('/login'); // Rediriger vers la page de login si non connecté
		}

		async function fetchArticles() {
			const response = await fetch(`${baseUrl}/articles`);
			if (response.ok) {
				articles = await response.json();
			} else {
				console.error('Failed to fetch articles:', await response.text());
			}
		}

		fetchArticles();
	});

	async function deleteArticle(articleId: number, articleTitle: string) {
		if (confirm(`Êtes-vous sûr de vouloir supprimer l'article "${articleTitle}" ?`)) {
			const response = await fetch(`${baseUrl}/articles/${articleId}`, {
				method: 'DELETE'
			});
			if (response.ok) {
				articles = articles.filter((article) => article.id !== articleId);
				alert('Article supprimé avec succès');
			} else {
				console.error('Failed to delete article:', await response.text());
			}
		}
	}
</script>

<section class="account-section">
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
				<button class="delete-button" on:click={() => deleteArticle(article.id, article.title)}
					>Supprimer</button
				>

				<button class="edit-button" disabled>Modifier</button>
			</div>
		{/each}
	</div>
</section>

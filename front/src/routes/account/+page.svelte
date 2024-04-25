<!-- src/routes/account/+page.svelte -->

<script lang="ts">
	import { onMount } from 'svelte';
	import type { Article } from '../../app.d.ts';
	import '../../styles/account.scss';

	let articles: Article[] = [];

	onMount(async () => {
		const response = await fetch(`http://localhost:3000/articles`);
		if (response.ok) {
			articles = await response.json();
		} else {
			console.error('Failed to fetch articles:', await response.text());
		}
	});
</script>

<section class="account-section">
	<h2>Articles publiés</h2>
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
				<button class="delete-button">Supprimer</button>
				<button class="edit-button">Modifier</button>
			</div>
		{/each}
	</div>
</section>

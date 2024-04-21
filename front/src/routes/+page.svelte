<!-- src/routes/+page.svelte -->
<script lang="ts">
	import '../styles/home.scss';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import type { Article } from '../app.d.ts'; // Correction du chemin si nécessaire

	let articles: Article[] = []; // Modification ici pour utiliser directement Article

	onMount(async () => {
		const response = await fetch('http://localhost:3000/articles');
		if (response.ok) {
			articles = await response.json();
		}
	});

	function navigateToArticle(id: number) {
		goto(`/articles/${id}`);
	}
</script>

<div class="gallery">
	{#each articles as article}
		<button
			class="article-preview"
			on:click={() => navigateToArticle(article.id)}
			aria-label={`Read more about ${article.title}`}
		>
			<p class="article-title">{article.title}</p>
		</button>
	{/each}
</div>

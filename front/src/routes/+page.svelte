<!-- src/routes/+page.svelte -->

<script lang="ts">
	import type { Article } from '../app.d.ts';
	import '../styles/home.scss';
	import { onMount } from 'svelte';

	let articles: Article[] = [];

	const baseUrl = import.meta.env.VITE_BACKEND_URL;

	onMount(async () => {
		const response = await fetch(`${baseUrl}/articles/latest`);

		if (response.ok) {
			articles = await response.json();
		}
	});
</script>

<svelte:head>
	<title>Accueil | Blog_</title>
	<meta name="description" content="Bienvenue sur la page d'accueil de Blog_" />
</svelte:head>

<div class="gallery">
	{#each articles as article}
		<a
			href={`/articles/${article.id}`}
			class="article-preview"
			aria-label={`En savoir plus sur ${article.title}`}
		>
			<p class="article-title">{article.title}</p>
		</a>
	{/each}
</div>

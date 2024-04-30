<!-- src/routes/all/+page.svelte -->

<script lang="ts">
	import type { Article } from '../../app.d.ts';
	import '../../styles/home.scss';
	import { onMount } from 'svelte';

	let articles: Article[] = [];

	onMount(async () => {
		const response = await fetch('http://localhost:3000/articles');
		if (response.ok) {
			articles = await response.json();
		}
	});
</script>

<div class="gallery">
	{#each articles as article}
		<a
			href={`/articles/${article.id}`}
			class="article-preview"
			aria-label={`Read more about ${article.title}`}
		>
			<p class="article-title">{article.title}</p>
		</a>
	{/each}
</div>

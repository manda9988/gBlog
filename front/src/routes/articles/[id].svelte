<!-- src/routes/articles/[id].svelte -->
<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import type { Article } from '../../app.d.ts';

	let article: Article | null = null;

	onMount(async () => {
		const { id } = $page.params;
		const response = await fetch(`http://localhost:3000/articles/${id}`);
		if (response.ok) {
			article = await response.json();
		} else {
			console.error('Failed to fetch article, response status:', response.status);
			goto('/'); // Redirect if article is not found
		}
	});
</script>

<article>
	{#if article}
		<h1>{article.title}</h1>
		<div>{article.content}</div>
	{:else}
		<p>Article not found.</p>
	{/if}
</article>

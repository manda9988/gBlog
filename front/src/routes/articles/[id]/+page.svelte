<!-- front/src/routes/articles/[id]/+page.svelte -->

<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import type { Article } from '../../../app.d.ts';

	let article: Article | undefined;

	onMount(async () => {
		const id = $page.params.id;
		const response = await fetch(`http://localhost:3000/articles/${id}`);
		if (response.ok) {
			article = await response.json();
		} else {
			console.error('Failed to fetch article:', await response.text());
		}
	});
</script>

{#if article}
	<article>
		<h1>{article.title}</h1>
		<div>{article.content}</div>
	</article>
{:else}
	<p>Loading article or article not found...</p>
{/if}

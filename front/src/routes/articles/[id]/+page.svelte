<!-- front/src/routes/articles/[id]/+page.svelte -->

<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import type { Article } from '../../../app.d.ts';
	import '../../../styles/article-detail.scss';

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
		<div class="article-header">
			<p class="article-date">
				{new Date(article.published_at).toLocaleDateString(undefined, {
					year: 'numeric',
					month: 'long',
					day: 'numeric'
				})}
			</p>
		</div>
		<h1>{article.title}</h1>
		<p>{article.content}</p>
	</article>
{:else}
	<p>Loading article or article not found...</p>
{/if}

<!-- src/routes/+page.svelte -->
<script>
	import { onMount } from 'svelte';

	let articles = [];

	onMount(async () => {
		const response = await fetch('http://localhost:3000/articles');
		if (response.ok) {
			articles = await response.json();
		}
	});
</script>

<div class="gallery">
	{#each articles as { title }}
		<div class="article-preview">
			<p class="article-title">{title}</p>
		</div>
	{/each}
</div>

<style lang="scss">
	.gallery {
		display: grid;
		grid-template-columns: repeat(3, 28vw);
		justify-content: center;
		gap: 4px;
		margin: 28px 0;
		background: rgb(238, 238, 238);
	}

	.article-preview {
		width: 28vw;
		height: 24vw;
		background: rgb(26, 26, 26);
		color: white;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		cursor: pointer;
		&:hover {
			background: lighten(rgb(26, 26, 26), 10%);
		}
	}

	.article-title {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;
	}
</style>

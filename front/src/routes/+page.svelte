<!-- src/routes/+page.svelte -->
<script>
	const articles = [
		{ title: 'Article 1', image: '' },
		{ title: 'Article 2', image: '' },
		{ title: 'Article 3', image: '' },
		{ title: 'Article 4', image: '' },
		{ title: 'Article 5', image: '' },
		{ title: 'Article 6', image: '' },
		{ title: 'Article 7', image: '' },
		{ title: 'Article 8', image: '' },
		{ title: 'Article 9', image: '' },
		{ title: 'Article 10', image: '' }
	];
</script>

<div class="gallery">
	{#each articles as { title, image }}
		<div class="article-preview">
			<img src={image} alt={title} />
			<p>{title}</p>
		</div>
	{/each}
</div>

<style lang="scss">
	.gallery {
		display: grid;
		grid-template-columns: repeat(3, 28vw);
		justify-content: center;
		gap: 4px;
		margin: 16px 0;
		background: rgb(238, 238, 238);

		.article-preview {
			width: 28vw;
			height: 24vw;
			background: rgb(26, 26, 26);
			color: white;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;

			img {
				max-width: 100%;
				max-height: 100%;
			}
		}
	}
</style>

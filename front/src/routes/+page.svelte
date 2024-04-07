<!-- src/routes/+page.svelte -->
<script>
	import Title from '$lib/Title.svelte';
	import Nav from '$lib/Nav.svelte';
	import Footer from '$lib/Footer.svelte';

	// Données factices pour les articles
	const articles = [
		{ title: 'Article 1', image: 'lien_vers_image_1' },
		{ title: 'Article 2', image: 'lien_vers_image_2' },
		{ title: 'Article 3', image: 'lien_vers_image_3' },
		{ title: 'Article 4', image: 'lien_vers_image_4' },
		{ title: 'Article 5', image: 'lien_vers_image_5' },
		{ title: 'Article 6', image: 'lien_vers_image_6' }
	];
</script>

<Title />
<Nav />
<div class="gallery">
	{#each articles as { title, image }}
		<div class="article-preview">
			<img src={image} alt={title} />
			<p>{title}</p>
		</div>
	{/each}
</div>
<Footer />

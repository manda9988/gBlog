<!-- src/routes/account/+page.svelte -->

<script>
	let articles = [
		{
			id: 1,
			author: 'Alex Dupont',
			title: 'Svelte pour débutants',
			category: 'Développement Web',
			date: '2024-01-01'
		},
		{
			id: 2,
			author: 'Chris Martin',
			title: 'La cuisine française',
			category: 'Cuisine',
			date: '2024-01-02'
		},
		{ id: 3, author: 'Jane Doe', title: 'Jardinage 101', category: 'Jardinage', date: '2024-01-03' }
	];

	function deleteArticle(articleId) {
		articles = articles.filter((article) => article.id !== articleId);
	}
</script>

<section class="account-section">
	<h2>Articles publiés</h2>
	<div class="articles-grid">
		<div class="grid-header">Auteur</div>
		<div class="grid-header">Titre</div>
		<div class="grid-header">Catégorie</div>
		<div class="grid-header">Date</div>
		<div class="grid-header">Actions</div>
		{#each articles as article (article.id)}
			<div class="grid-item">{article.author}</div>
			<div class="grid-item">{article.title}</div>
			<div class="grid-item">{article.category}</div>
			<div class="grid-item">{article.date}</div>
			<div class="grid-item">
				<button on:click={() => deleteArticle(article.id)}>Supprimer</button>
				<button>Modifier</button>
			</div>
		{/each}
	</div>
</section>

<style lang="scss">
	.account-section {
		display: flex;
		flex-direction: column;
		padding: 2rem;
		width: 100%;
		.articles-grid {
			display: grid;
			grid-template-columns: repeat(5, 1fr);
			gap: 0.5rem;
			width: 100%;
			max-width: 800px;
			.grid-header {
				font-weight: bold;
				padding: 0.5rem;
			}
			.grid-item {
				padding: 0.5rem;
				border: 1px solid #ccc;
				border-radius: 4px;
			}
			button {
				background-color: #e3342f;
				color: white;
				border: none;
				border-radius: 4px;
				padding: 0.25rem 0.5rem;
				cursor: pointer;
				margin-top: 0.5rem;
				&:hover {
					background-color: darken(#e3342f, 10%);
				}
			}
		}
		h2 {
			margin-bottom: 1rem;
		}
	}
</style>

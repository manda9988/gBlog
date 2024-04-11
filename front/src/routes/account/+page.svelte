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
				<button class="delete-button">Supprimer</button>
				<button class="edit-button">Modifier</button>
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
			margin: 0 auto;
			.grid-header {
				font-weight: 700;
				text-align: center;
			}
			.grid-item {
				padding: 0.5rem;
				border: 1px solid #ccc;
				border-radius: 4px;
				display: flex;
				align-items: center;
				justify-content: center;
				text-align: center;
				flex-direction: column;
				font-weight: 200;
			}

			button {
				color: white;
				border: none;
				border-radius: 4px;
				padding: 0.25rem 0.5rem;
				cursor: pointer;
				margin: 0.15rem;
				width: 85%;
			}
			.delete-button {
				background: #e40800;
				&:hover {
					background-color: darken(#e40800, 10%);
				}
			}
			.edit-button {
				background: #007b10;
				&:hover {
					background-color: lighten(#007b10, 10%);
				}
			}
		}
		h2 {
			margin-bottom: 2rem;
			font-weight: 800;
			font-size: 1.7rem;
			text-align: center;
		}
	}
</style>

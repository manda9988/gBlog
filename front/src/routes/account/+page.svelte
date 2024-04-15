<!-- src/routes/account/+page.svelte -->

<script>
	import '../../styles/account.scss';

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

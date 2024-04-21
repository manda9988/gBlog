<!-- src/routes/publish/+page.svelte -->

<script>
	import '../../styles/publish.scss';

	// Ici, tu ajouteras la logique pour gérer la soumission du formulaire
	function handleSubmit(event) {
		// Prevent the form from actually submitting
		event.preventDefault();

		// Ici, tu traiteras les données du formulaire
	}
</script>

<section class="publish-section">
	<form on:submit={handleSubmit}>
		<div class="form-group">
			<label for="title">Titre de l'article</label>
			<input type="text" id="title" />
		</div>
		<div class="form-group">
			<label for="category">Catégorie</label>
			<select id="category">
				<option value="">--Choisir une catégorie--</option>
				<option value="categorie1">Catégorie 1</option>
				<option value="categorie2">Catégorie 2</option>
				// Ajouter plus de catégories ici
			</select>
		</div>
		<div class="form-group">
			<label for="content">Contenu de l'article</label>
			<textarea id="content" rows="10"></textarea>
		</div>
		<button type="submit">Publier</button>
	</form>
</section>

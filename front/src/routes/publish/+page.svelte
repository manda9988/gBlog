<!-- src/routes/publish/+page.svelte -->

<script lang="ts">
	import { onMount } from 'svelte';
	import type { Category, ArticleData } from '../../app.d.ts';
	import '../../styles/publish.scss';

	let categories: Category[] = [];

	onMount(async () => {
		const response = await fetch('http://localhost:3000/categories');
		if (response.ok) {
			categories = (await response.json()) as Category[];
		} else {
			console.error('Failed to load categories:', await response.text());
		}
	});

	function handleSubmit(event: Event) {
		event.preventDefault();
		if (!confirm('Êtes-vous sûr de vouloir publier cet article?')) {
			return;
		}

		const title = (document.getElementById('title') as HTMLInputElement).value;
		const categoryId = (document.getElementById('category') as HTMLSelectElement).value;
		const content = (document.getElementById('content') as HTMLTextAreaElement).value;
		const formData: ArticleData = {
			title,
			category_id: Number(categoryId),
			content
		};
		submitArticle(formData);
	}

	async function submitArticle(articleData: ArticleData) {
		const response = await fetch('http://localhost:3000/articles', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(articleData)
		});
		if (response.ok) {
			alert("L'article a été publié avec succès!");
			window.location.href = '/'; // Redirection vers la page d'accueil
		} else {
			console.error('Failed to publish article:', await response.text());
		}
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
				{#each categories as category}
					<option value={category.id}>{category.name}</option>
				{/each}
			</select>
		</div>
		<div class="form-group">
			<label for="content">Contenu de l'article</label>
			<textarea id="content" rows="10"></textarea>
		</div>
		<button type="submit">Publier</button>
	</form>
</section>

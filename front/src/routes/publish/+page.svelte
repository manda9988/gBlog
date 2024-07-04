<!-- src/routes/publish/+page.svelte -->

<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { isLoggedIn } from '../../lib/authStore';
	import type { Category, ArticleData } from '../../app.d.ts';
	import '../../styles/publish.scss';

	let categories: Category[] = [];
	let imageUrl: string = '';

	const baseUrl = import.meta.env.VITE_BACKEND_URL;

	onMount(() => {
		if (!$isLoggedIn) {
			// Rediriger vers la page de login si non connecté
			goto('/login');
		}

		// Fonction pour récupérer les catégories
		async function fetchCategories() {
			const response = await fetch(`${baseUrl}/categories`);
			if (response.ok) {
				categories = (await response.json()) as Category[];
			} else {
				console.error('Failed to load categories:', await response.text());
			}
		}

		fetchCategories();
	});

	// Fonction pour gérer l'upload de l'image
	async function handleImageUpload(event: Event) {
		const fileInput = event.target as HTMLInputElement;
		if (fileInput.files && fileInput.files.length > 0) {
			const formData = new FormData();
			formData.append('image', fileInput.files[0]);

			const response = await fetch(`${baseUrl}/upload`, {
				method: 'POST',
				body: formData
			});

			if (response.ok) {
				const data = await response.json();
				imageUrl = data.imageUrl; // Stocker l'URL de l'image
			} else {
				// Afficher une erreur en cas d'échec
				console.error('Image upload failed:', await response.text());
			}
		}
	}

	// Fonction pour gérer la soumission du formulaire de publication
	function handleSubmit(event: Event) {
		event.preventDefault(); // Empêcher le rechargement de la page
		if (!confirm('Êtes-vous sûr de vouloir publier cet article?')) {
			return;
		}

		const title = (document.getElementById('title') as HTMLInputElement).value;
		const categoryId = (document.getElementById('category') as HTMLSelectElement).value;
		const content = (document.getElementById('content') as HTMLTextAreaElement).value;
		const formData: ArticleData = {
			title,
			category_id: Number(categoryId),
			content,
			image_url: imageUrl // Inclure l'URL de l'image dans les données de l'article
		};
		submitArticle(formData); // Appeler la fonction pour soumettre l'article
	}

	// Fonction pour soumettre l'article à l'API
	async function submitArticle(articleData: ArticleData) {
		const response = await fetch(`${baseUrl}/articles`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(articleData) // Envoyer les données de l'article en JSON
		});
		if (response.ok) {
			alert("L'article a été publié avec succès!");
			window.location.href = '/'; // Redirection vers la page d'accueil
		} else {
			// Alerter l'utilisateur en cas d'échec
			alert("Échec de la publication de l'article");
			console.error('Failed to publish article:', await response.text());
		}
	}
</script>

<!-- Section <head> du document HTML avec titre et les meta-données -->
<svelte:head>
	<!-- Titre de la page -->
	<title>Publier un Article | Blog_</title>
	<!-- Description de la page pour le SEO -->
	<meta name="description" content="Publier un Article sur Blog_" />
</svelte:head>

<section class="publish-section">
	<form on:submit={handleSubmit}>
		<div class="form-group">
			<label for="title">Titre de l'article</label>
			<input type="text" id="title" maxlength="25" />
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
			<label for="image">Image de l'article</label>

			<input type="file" id="image" accept="image/*" on:change={handleImageUpload} />
		</div>
		<div class="form-group">
			<label for="content">Contenu de l'article</label>
			<textarea id="content" rows="10"></textarea>
		</div>
		<button type="submit">Publier</button>
	</form>
</section>

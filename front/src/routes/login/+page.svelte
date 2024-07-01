<!-- src/routes/login/+page.svelte -->

<script lang="ts">
	// Importation de goto pour la navigation
	import { goto } from '$app/navigation';
	// Importation des stores et fonctions d'authentification
	import { isLoggedIn, startLogoutTimer, logout } from '../../lib/authStore';
	import '../../styles/login.scss';

	// Variable pour stocker l'email de l'utilisateur
	let email = '';
	// Variable pour stocker le mot de passe de l'utilisateur
	let password = '';

	const baseUrl = import.meta.env.VITE_BACKEND_URL;

	// Fonction pour gérer la soumission du formulaire de login
	async function login(event: Event) {
		event.preventDefault(); // Empêcher le rechargement de la page
		const response = await fetch(`${baseUrl}/login`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			// Envoyer l'email et le mot de passe en JSON
			body: JSON.stringify({ email, password })
		});

		if (response.ok) {
			const data = await response.json();
			// Stocker le token JWT dans le localStorage
			localStorage.setItem('token', data.token);
			// Mettre à jour le store pour indiquer que l'utilisateur est connecté
			isLoggedIn.set(true);
			// Démarrer le timer de déconnexion automatique
			startLogoutTimer();
			goto('/');
			alert('Connexion réussie');
		} else {
			alert('Échec de la connexion');
		}
	}
</script>

<!-- Section pour définir des éléments dans le <head> du document HTML, comme le titre et les meta-données -->
<svelte:head>
	<!-- Titre de la page -->
	<title>Connexion | Blog_</title>
	<!-- Description de la page pour le SEO -->
	<meta name="description" content="Connexion | Blog_" />
</svelte:head>

<section class="login-section">
	{#if !$isLoggedIn}
		<!-- Formulaire de connexion si l'utilisateur n'est pas connecté -->
		<form on:submit={login} autocomplete="off">
			<div>
				<label for="email">Email</label>
				<input type="email" id="email" bind:value={email} autocomplete="new-password" />
			</div>
			<div>
				<label for="password">Mot de passe</label>
				<input type="password" id="password" bind:value={password} autocomplete="new-password" />
			</div>
			<button type="submit">Connexion</button>
		</form>
	{:else}
		<!-- Bouton de déconnexion si l'utilisateur est connecté -->
		<button class="logout-button" on:click={logout}>Déconnexion</button>
	{/if}
</section>

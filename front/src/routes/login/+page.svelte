<!-- src/routes/login/+page.svelte -->

<script lang="ts">
	import { goto } from '$app/navigation';
	import { isLoggedIn, startLogoutTimer, logout } from '../../lib/authStore';
	import '../../styles/login.scss';

	let email = '';
	let password = '';

	const baseUrl = import.meta.env.VITE_BACKEND_URL;

	// Fonction pour gérer la soumission du formulaire de login
	async function login(event: Event) {
		// Empêcher le rechargement de la page
		event.preventDefault();
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
			isLoggedIn.set(true);
			startLogoutTimer();
			goto('/');
			alert('Connexion réussie');
		} else {
			alert('Échec de la connexion');
		}
	}
</script>

<!-- Section <head> du document HTML avec titre et les meta-données -->
<svelte:head>
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

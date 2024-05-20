<!-- src/routes/login/+page.svelte -->

<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import '../../styles/login.scss';

	let email = '';
	let password = '';
	let isLoggedIn = false;

	onMount(() => {
		const token = localStorage.getItem('token');
		isLoggedIn = !!token; // Mettre à jour l'état de connexion
	});

	// Fonction de login pour envoyer les informations d'identification et stocker le token JWT
	async function login(event: Event) {
		event.preventDefault();
		console.log(`Attempting login with email: ${email}`);
		const response = await fetch('http://localhost:3000/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ email, password })
		});

		if (response.ok) {
			const data = await response.json();
			console.log('Login successful, token received');
			localStorage.setItem('token', data.token); // Stocker le token dans localStorage
			alert('Login successful'); // Message d'alerte pour connexion réussie
			isLoggedIn = true; // Mettre à jour l'état de connexion
			goto('/account'); // Rediriger vers la page de compte après une connexion réussie
		} else {
			console.log('Login failed');
			alert('Login failed');
		}
	}

	function logout() {
		// Demande de confirmation pour la déconnexion
		if (confirm('Êtes-vous sûr de vouloir vous déconnecter ?')) {
			localStorage.removeItem('token'); // Supprimer le token du localStorage
			isLoggedIn = false; // Mettre à jour l'état de connexion
			goto('/'); // Rediriger vers la page d'accueil
			console.log('Déconnexion');
		}
	}
</script>

<section>
	{#if !isLoggedIn}
		<form on:submit={login} autocomplete="off">
			<div>
				<label for="email">Email</label>
				<input type="email" id="email" bind:value={email} autocomplete="new-password" />
			</div>
			<div>
				<label for="password">Password</label>
				<input type="password" id="password" bind:value={password} autocomplete="new-password" />
			</div>
			<button type="submit">Login</button>
		</form>
	{:else}
		<button class="logout-button" on:click={logout}>Déconnexion</button>
	{/if}
</section>

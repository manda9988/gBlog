<!-- src/routes/login/+page.svelte -->

<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { isLoggedIn } from '../../lib/authStore'; // Importer la store
	import '../../styles/login.scss';

	let email = '';
	let password = '';
	const isBrowser = typeof window !== 'undefined';

	if (isBrowser) {
		onMount(() => {
			isLoggedIn.subscribe((value) => {
				// Ne rediriger vers /account que si on n'est pas sur la page de login
				if (value && window.location.pathname !== '/login') {
					goto('/account');
				}
			});
		});
	}

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
			if (isBrowser) {
				localStorage.setItem('token', data.token); // Stocker le token dans localStorage
				isLoggedIn.set(true); // Mettre à jour l'état de connexion dans la store
			}
			alert('Login successful'); // Message d'alerte pour connexion réussie
		} else {
			console.log('Login failed');
			alert('Login failed');
		}
	}

	function logout() {
		// Demande de confirmation pour la déconnexion
		if (confirm('Êtes-vous sûr de vouloir vous déconnecter ?')) {
			if (isBrowser) {
				localStorage.removeItem('token'); // Supprimer le token du localStorage
				isLoggedIn.set(false); // Mettre à jour l'état de connexion dans la store
			}
			goto('/'); // Rediriger vers la page d'accueil
			console.log('Déconnexion');
		}
	}
</script>

<section>
	{#if !$isLoggedIn}
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

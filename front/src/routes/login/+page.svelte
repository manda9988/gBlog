<!-- src/routes/login/+page.svelte -->

<script lang="ts">
	import { goto } from '$app/navigation';
	import { isLoggedIn } from '../../lib/authStore';
	import '../../styles/login.scss';

	let email = '';
	let password = '';

	// Ajout de la baseUrl pour utiliser les variables d'environnement
	const baseUrl = import.meta.env.VITE_BACKEND_URL;

	async function login(event: Event) {
		event.preventDefault();
		// Utilisation de baseUrl dans l'appel fetch
		const response = await fetch(`${baseUrl}/login`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ email, password })
		});

		if (response.ok) {
			const data = await response.json();
			localStorage.setItem('token', data.token);
			isLoggedIn.set(true);
			goto('/'); // Redirect to home after successful login
			alert('Login successful');
		} else {
			alert('Login failed');
		}
	}

	function logout() {
		if (confirm('Êtes-vous sûr de vouloir vous déconnecter ?')) {
			localStorage.removeItem('token');
			isLoggedIn.set(false);
			goto('/');
			alert('Disconnection');
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

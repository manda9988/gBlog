<!-- src/routes/login/+page.svelte -->

<script lang="ts">
	import { goto } from '$app/navigation';
	import { isLoggedIn, startLogoutTimer, logout } from '../../lib/authStore';
	import '../../styles/login.scss';

	let email = '';
	let password = '';
	const baseUrl = import.meta.env.VITE_BACKEND_URL;

	async function login(event: Event) {
		event.preventDefault();
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
			startLogoutTimer();
			goto('/');
			alert('Connexion réussie');
		} else {
			alert('Échec de la connexion');
		}
	}
</script>

<svelte:head>
	<title>Connexion - Blog_</title>
</svelte:head>

<section>
	{#if !$isLoggedIn}
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
		<button class="logout-button" on:click={logout}>Déconnexion</button>
	{/if}
</section>

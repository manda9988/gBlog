<!-- src/routes/login/+page.svelte -->

<script lang="ts">
	import { goto } from '$app/navigation';
	import { isLoggedIn } from '../../lib/authStore';
	import '../../styles/login.scss';

	let email = '';
	let password = '';

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
			localStorage.setItem('token', data.token);
			isLoggedIn.set(true);
			goto('/'); // Redirect to home after successful login
			alert('Login successful');
		} else {
			console.log('Login failed');
			alert('Login failed');
		}
	}

	function logout() {
		if (confirm('Êtes-vous sûr de vouloir vous déconnecter ?')) {
			localStorage.removeItem('token');
			isLoggedIn.set(false);
			goto('/');
			console.log('Déconnexion');
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

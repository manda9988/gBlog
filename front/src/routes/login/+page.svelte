<!-- src/routes/login/+page.svelte -->

<script lang="ts">
	import { goto } from '$app/navigation';
	import '../../styles/login.scss';

	let email = '';
	let password = '';

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
			goto('/account'); // Rediriger vers la page de compte après une connexion réussie
		} else {
			console.log('Login failed');
			alert('Login failed');
		}
	}
	function logout() {
		// Logique de déconnexion ici
		console.log('Déconnexion');
	}
</script>

<section>
	<form on:submit={login}>
		<div>
			<label for="email">Email</label>
			<input type="email" id="email" bind:value={email} />
		</div>
		<div>
			<label for="password">Password</label>
			<input type="password" id="password" bind:value={password} />
		</div>
		<button type="submit">Login</button>
	</form>
	<button class="logout-button" on:click={logout}>Déconnexion</button>
</section>

<!-- src/lib/Nav.svelte -->

<script lang="ts">
	import { page } from '$app/stores'; // Importation du store pour obtenir des informations sur la page actuelle
	import { derived } from 'svelte/store'; // Importation de derived pour créer des stores dérivés
	import { isLoggedIn } from './authStore'; // Importation du store pour vérifier si l'utilisateur est connecté
	import '../styles/nav.scss'; // Importation des styles pour la navigation

	// Store dérivé pour obtenir le chemin actuel de l'URL
	const currentPath = derived(page, ($page) => $page.url.pathname);
</script>

<nav>
	<!-- Lien vers la page d'accueil, actif si le chemin actuel est '/' -->
	<a href="/" class:active={$currentPath === '/'}>Home</a>
	<a href="/all" class:active={$currentPath === '/all'}>All</a>
	{#if $isLoggedIn}
		<!-- Afficher Publish et Account seulement si l'utilisateur est connecté -->
		<a href="/publish" class:active={$currentPath === '/publish'}>Publish</a>
		<a href="/account" class:active={$currentPath === '/account'}>Account</a>
	{/if}
	<a href="/login" class:active={$currentPath === '/login'}>
		{#if $isLoggedIn}
			<!-- Affiche un message de bienvenue si l'utilisateur est connecté -->

			Hi Admin✌️
		{:else}
			Login
		{/if}
	</a>
</nav>

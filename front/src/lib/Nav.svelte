<!-- src/lib/Nav.svelte -->

<script lang="ts">
	// Importation du store pour obtenir des informations sur la page actuelle
	import { page } from '$app/stores';
	// Importation de derived pour créer des stores dérivés
	import { derived } from 'svelte/store';
	// Importation du store pour vérifier si l'utilisateur est connecté
	import { isLoggedIn } from './authStore';
	// Importation des styles pour la navigation
	import '../styles/nav.scss';

	// Store dérivé pour obtenir le chemin actuel de l'URL
	const currentPath = derived(page, ($page) => $page.url.pathname);
</script>

<nav>
	<a href="/" class:active={$currentPath === '/'}>Home</a>
	<a href="/all" class:active={$currentPath === '/all'}>All</a>
	{#if $isLoggedIn}
		<!-- Afficher Publish et Account seulement si l'utilisateur est connecté -->
		<a href="/publish" class:active={$currentPath === '/publish'}>Publish</a>
		<a href="/account" class:active={$currentPath === '/account'}>Account</a>
	{/if}
	<a href="/login" class:active={$currentPath === '/login'}>
		{#if $isLoggedIn}
			Hi Admin✌️
		{:else}
			Login
		{/if}
	</a>
</nav>

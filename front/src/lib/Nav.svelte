<!-- src/lib/Nav.svelte -->

<script lang="ts">
	import { page } from '$app/stores';
	import { derived } from 'svelte/store';

	// Créons une store dérivée pour suivre le chemin de la page courante
	const currentPath = derived(page, ($page) => $page.url.pathname);
</script>

<nav>
	<a href="/" class:active={$currentPath === '/'}>Home</a>
	<a href="/all" class:active={$currentPath === '/all'}>All</a>
	<a href="/publish" class:active={$currentPath === '/publish'}>Publish</a>
	<a href="/account" class:active={$currentPath === '/account'}>Account</a>
	<a href="/login" class:active={$currentPath === '/login'}>Login</a>
</nav>

<style lang="scss">
	nav {
		background: rgb(37, 37, 37);
		padding: 0.6rem 0;
		text-align: center;

		a {
			color: rgb(238, 238, 238);
			margin: 0 1rem;
			text-decoration: none;
			font-size: 0.8rem;
			font-weight: 550;
			text-transform: uppercase;

			&:hover {
				color: grey;
			}
		}

		.active {
			color: rgb(154, 154, 154);
		}
		@media (max-width: 600px) {
			a {
				margin: 0 0.85rem;
				font-size: 0.7rem;
			}
		}
	}
</style>

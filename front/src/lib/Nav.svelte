<!-- src/lib/Nav.svelte -->

<script lang="ts">
	import { page } from '$app/stores';
	import { derived } from 'svelte/store';
	import { isLoggedIn } from './authStore';
	import '../styles/nav.scss';

	const currentPath = derived(page, ($page) => $page.url.pathname);
</script>

<nav>
	<a href="/" class:active={$currentPath === '/'}>Home</a>
	<a href="/all" class:active={$currentPath === '/all'}>All</a>
	<a href="/publish" class:active={$currentPath === '/publish'}>Publish</a>
	<a href="/account" class:active={$currentPath === '/account'}>Account</a>
	<a href="/login" class:active={$currentPath === '/login'}>
		{#if $isLoggedIn}
			Hi Admin✌️
		{:else}
			Login
		{/if}
	</a>
</nav>

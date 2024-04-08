<!-- src/routes/+layout.svelte -->

<script>
	import '../styles/global.scss';
	import Title from '../lib/Title.svelte';
	import Nav from '../lib/Nav.svelte';
	import Footer from '../lib/Footer.svelte';
</script>

<div class="layout-container">
	<Title />

	<Nav />
	<main>
		<slot />
	</main>
	<Footer />
</div>

<style>
	.layout-container {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}
	main {
		flex: 1;
	}
</style>

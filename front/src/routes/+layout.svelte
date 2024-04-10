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

<style lang="scss">
	.layout-container {
		display: flex;
		flex-direction: column;
		min-height: 100vh;

		main {
			flex: 1;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: flex-start;
			background: rgb(238, 238, 238);
		}
	}
</style>

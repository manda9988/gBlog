<!-- src/routes/+layout.svelte -->

<script>
	import '../styles/global.scss'; // Importation des styles globaux
	import Title from '../lib/Title.svelte'; // Importation du composant Title
	import Nav from '../lib/Nav.svelte';
	import Footer from '../lib/Footer.svelte';
</script>

<div class="layout-container">
	<!-- Composant pour le titre du site -->
	<Title />

	<Nav />
	<main>
		<!-- Emplacement pour le contenu des pages enfants -->
		<slot />
	</main>
	<Footer />
</div>

<style lang="scss">
	.layout-container {
		display: flex;
		flex-direction: column;
		//Le conteneur prend toute la hauteur de la fenêtre
		min-height: 100vh;

		main {
			// Permet à main de prendre tout l'espace disponible
			flex: 1;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: flex-start;
			background: rgb(238, 238, 238);
		}
	}
</style>

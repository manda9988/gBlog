// svelte.config.js

// Ce fichier configure SvelteKit pour l'utilisation de Vite et un adaptateur pour le déploiement automatique.

// Il définit les préprocesseurs à utiliser et l'adaptateur de déploiement.

//  Importation de l'adaptateur SvelteKit pour le déploiement automatique.
//  Importation de la fonction de préprocesseur Vite pour Svelte.
import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(), // Utilisation du préprocesseur Vite pour Svelte

	kit: {
		adapter: adapter() // Configuration de l'adaptateur de déploiement
	}
};

export default config; // Exportation de la configuration pour être utilisée par SvelteKit

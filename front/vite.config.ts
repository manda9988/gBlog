// vite.config.ts

// Ce fichier configure Vite pour un projet SvelteKit.
// Il définit les plugins à utiliser et configure un proxy pour les requêtes API.

// Importation des modules nécessaires pour configurer Vite avec SvelteKit.
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
	// Chargement des variables d'environnement en fonction du mode
	const env = loadEnv(mode, process.cwd(), 'VITE_');

	return {
		plugins: [sveltekit()], // Utilisation du plugin SvelteKit pour Vite
		server: {
			proxy: {
				'/api': {
					// Cible du proxy pour les requêtes API
					target: env.VITE_BACKEND_URL,
					changeOrigin: true,
					rewrite: (path) => path.replace(/^\/api/, '')
				}
			}
		}
	};
});

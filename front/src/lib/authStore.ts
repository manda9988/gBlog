// authStore.ts

import { writable } from 'svelte/store'; // Importation de writable pour créer des stores réactifs
import { goto } from '$app/navigation'; // Importation de goto pour naviguer entre les pages

// Store pour suivre l'état de connexion de l'utilisateur
export const isLoggedIn = writable(
	typeof window !== 'undefined' && !!localStorage.getItem('token') // Vérifie si un token est présent dans localStorage
);

let logoutTimeout: ReturnType<typeof setTimeout>; // Déclare une variable pour stocker le timeout de déconnexion

// Fonction pour démarrer le timer de déconnexion
export function startLogoutTimer(duration = 6000000) {
	clearTimeout(logoutTimeout); // Réinitialise le timeout s'il existe

	// Stocke l'heure de déconnexion dans le localStorage
	const logoutTime = Date.now() + duration;
	localStorage.setItem('logoutTime', logoutTime.toString());

	// Définir le timeout pour déconnecter l'utilisateur après la durée spécifiée
	logoutTimeout = setTimeout(() => {
		logout();
	}, duration);
}

// Fonction pour vérifier le timer de déconnexion
export function checkLogoutTimer() {
	const logoutTime = localStorage.getItem('logoutTime'); // Récupère l'heure de déconnexion depuis le localStorage
	if (logoutTime) {
		const remainingTime = parseInt(logoutTime) - Date.now();
		if (remainingTime > 0) {
			// Définit un timeout pour déconnecter l'utilisateur lorsque le temps restant est écoulé

			logoutTimeout = setTimeout(() => {
				logout();
			}, remainingTime);
		} else {
			logout(); // Déconnecte immédiatement si le temps est écoulé
		}
	}
}

// Fonction pour déconnecter l'utilisateur
export function logout() {
	clearTimeout(logoutTimeout); // Réinitialise le timeout
	localStorage.removeItem('token'); // Supprime le token du localStorage
	localStorage.removeItem('logoutTime'); // Supprime l'heure de déconnexion du localStorage
	isLoggedIn.set(false); // Met à jour le store pour indiquer que l'utilisateur est déconnecté
	goto('/'); // Redirige vers la page d'accueil
	alert('Vous avez été déconnecté automatiquement.'); // Alerte l'utilisateur qu'il a été déconnecté
}

// Vérifie le timer de déconnexion au chargement de la page
if (typeof window !== 'undefined') {
	checkLogoutTimer();
}

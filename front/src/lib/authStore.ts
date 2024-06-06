// authStore.ts

import { writable } from 'svelte/store';
import { goto } from '$app/navigation';

export const isLoggedIn = writable(
	typeof window !== 'undefined' && !!localStorage.getItem('token')
);

let logoutTimeout: ReturnType<typeof setTimeout>;

export function startLogoutTimer(duration = 6000000) {
	clearTimeout(logoutTimeout);

	// Stocker l'heure de déconnexion dans le localStorage
	const logoutTime = Date.now() + duration;
	localStorage.setItem('logoutTime', logoutTime.toString());

	logoutTimeout = setTimeout(() => {
		logout();
	}, duration);
}

export function checkLogoutTimer() {
	const logoutTime = localStorage.getItem('logoutTime');
	if (logoutTime) {
		const remainingTime = parseInt(logoutTime) - Date.now();
		if (remainingTime > 0) {
			logoutTimeout = setTimeout(() => {
				logout();
			}, remainingTime);
		} else {
			logout();
		}
	}
}

export function logout() {
	clearTimeout(logoutTimeout);
	localStorage.removeItem('token');
	localStorage.removeItem('logoutTime');
	isLoggedIn.set(false);
	goto('/');
	alert('Vous avez été déconnecté automatiquement.');
}

// Vérifier le timer de déconnexion au chargement de la page
if (typeof window !== 'undefined') {
	checkLogoutTimer();
}

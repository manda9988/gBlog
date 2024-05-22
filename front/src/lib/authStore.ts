// authStore.ts

import { writable } from 'svelte/store';

export const isLoggedIn = writable(
	typeof window !== 'undefined' && !!localStorage.getItem('token')
);

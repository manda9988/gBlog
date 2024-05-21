// authStore.ts

import { writable } from 'svelte/store';

const isBrowser = typeof window !== 'undefined';

export const isLoggedIn = writable(isBrowser && !!localStorage.getItem('token'));

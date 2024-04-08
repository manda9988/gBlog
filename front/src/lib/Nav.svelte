<!-- src/lib/Nav.svelte -->
<nav>
	<a href="/">Accueil</a>
	<a href="/articles">Articles</a>
	<a href="/compte">Compte</a>
</nav>

<style lang="scss">
	nav {
		background-color: rgb(42, 42, 42);
		padding: 0.6rem 0;
		text-align: center;

		a {
			color: rgb(238, 238, 238);
			margin: 0 1rem;
			text-decoration: none;
			text-transform: uppercase;
			font-size: 0.95rem;
			font-weight: 600;

			&:hover {
				color: grey;
			}
		}
	}
</style>

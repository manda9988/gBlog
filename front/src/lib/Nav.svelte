<!-- src/lib/Nav.svelte -->
<nav>
	<a href="/">Home</a>
	<a href="/all">All</a>
	<a href="/publish">Publish</a>
	<a href="/account">Account</a>
	<a href="/login">Login</a>
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
			// text-transform: uppercase;
			font-size: 0.95rem;
			font-weight: 500;

			&:hover {
				color: grey;
			}
		}
	}
</style>

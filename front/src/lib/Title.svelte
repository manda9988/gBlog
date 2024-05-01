<!-- src/lib/Title.svelte -->
<script>
	export let title = 'Blog';
</script>

<h1>{title}</h1>

<style lang="scss">
	h1 {
		color: rgb(238, 238, 238);
		background-color: rgb(31, 31, 31);
		text-align: center;
		width: 100%;
		padding: 4px 0;
		margin: 0;
		// text-transform: uppercase;
		letter-spacing: -3.2px;
		font-weight: 100;
		font-size: 2.5rem;
		font-family: 'Orbitron', sans-serif;
	}
</style>

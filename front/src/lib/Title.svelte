<!-- src/lib/Title.svelte -->

<script>
	export let title = 'Blog _';
</script>

<a href="/">
	<h1>{title}</h1>
</a>

<style lang="scss">
	h1 {
		color: rgb(238, 238, 238);
		background-color: rgb(31, 31, 31);
		text-align: center;
		width: 100%;
		padding: 4px 0;
		margin: 0;
		letter-spacing: -3.2px;
		font-weight: 900;
		font-size: 2.5rem;
		font-family: 'Orbitron', sans-serif;
		cursor: pointer;
	}
</style>

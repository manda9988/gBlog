<!-- src/routes/login/+page.svelte -->

<script>
	import '../../styles/login.scss';
</script>

<section>
	<form>
		<div>
			<label for="email">Email</label>
			<input type="email" id="email" />
		</div>
		<div>
			<label for="password">Password</label>
			<input type="password" id="password" />
		</div>
		<button type="submit">Login</button>
	</form>
</section>

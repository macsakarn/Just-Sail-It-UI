<script lang="ts">
	import '../app.postcss'
	import Navbar from './Navbar.svelte'
	import Alert from '$lib/Components/AlertModal.svelte'
	import FooterBar from './FooterBar.svelte'
</script>

<div class="container relative">
	<Navbar />
</div>

<main>
	<slot />

	<div class="alert">
		<Alert />
	</div>
</main>

<FooterBar />

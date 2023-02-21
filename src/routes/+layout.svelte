<script lang="ts">
	import '../app.postcss'
	import Navbar from './Navbar.svelte'
	import Alert from '$lib/Components/AlertModal.svelte'
	import FooterBar from './FooterBar.svelte'
</script>

<div class="flex flex-col h-screen">
	<div class="container relative">
		<Navbar />
	</div>

	<main class="flex-1">
		<slot />

		<div class="alert">
			<Alert />
		</div>
	</main>

	<FooterBar />
</div>

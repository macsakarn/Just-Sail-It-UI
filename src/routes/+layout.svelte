<script lang="ts">
	import '../app.postcss';
	import Navbar from '$lib/components/Navbar.svelte';
	import Alert from '$lib/Components/AlertModal.svelte';
</script>

<div class="container relative">
	<Navbar />
</div>
<div class="pt-20">
	<slot />
</div>

<div class="alert">
	<Alert />
</div>
<script>
	import '../app.postcss';
	import Navbar from "$lib/components/Navbar.svelte"; 
</script>

<div class="container relative">
    <Navbar/>
</div>
<div class="pt-20">
	<slot />
</div>

<script lang="ts">
	import { Alert } from 'flowbite-svelte';
	import { flip } from 'svelte/animate';
	import { fly } from 'svelte/transition';
	import { notifications } from '$lib/notifications.js';
	export let themes = {
		danger: 'red',
		success: 'green',
		warning: 'yellow',
		info: 'blue'
	};
</script>

{#each $notifications as notification (notification.id)}
	<div animate:flip transition:fly={{ y: 30 }}>
		<Alert class="my-2" color={themes[notification.type]}>
			<span class="font-medium">Info asddds!</span>
			{notification.message}
		</Alert>
	</div>
{/each}

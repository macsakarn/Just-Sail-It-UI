<script lang="ts">
	import { Heading, Hr, Modal } from 'flowbite-svelte'
	import { Edit, Plus } from 'lucide-svelte'
	let formModal = false
	export let header = ''
	export let plus = false
</script>

<div class="card text-web-black pb-10">
	<div class="card-header flex justify-between">
		<Heading tag="h5" color="text-web-black">{header}</Heading>
		<button type="button" on:click={() => (formModal = true)}>
			{#if plus}
				<Plus />
			{:else}
				<Edit />
			{/if}
		</button>
	</div>
	<div class="card-content mt-5">
		<slot name="card">
			<span>no card body</span>
		</slot>
		<Hr hrClass="mt-10" />
	</div>
</div>

<Modal bind:open={formModal} class="w-full">
	<slot name="modal">
		<span>no body</span>
	</slot>
</Modal>

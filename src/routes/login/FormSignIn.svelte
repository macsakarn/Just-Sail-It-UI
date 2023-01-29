<script lang="ts">
	import { Input, Label, Button, Helper } from 'flowbite-svelte';
	import type { ActionData } from './$types';
	export let form: ActionData;

	export let publicAddress = '';

	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	function back() {
		dispatch('back', {
			page: 1
		});
	}
</script>

<div class="mb-5">
	<Label for="public_address" class="mb-2 text-left">Public address</Label>
	<Input type="text" name="publicAddress" required value={form?.data?.pubId ?? publicAddress} />
</div>
<div class="mb-5">
	<Label for="username" class="mb-2 text-left">Username</Label>
	<Input
		type="text"
		name="username"
		required
		value={form?.data?.username ?? ''}
		color={form?.error?.username ? 'red' : 'base'}
	/>
	{#if form?.error?.username}
		<Helper class="mt-2" color="red">{form?.error?.username[0]}</Helper>
	{/if}
</div>
<div class="mb-5">
	<Label for="email" class="mb-2 text-left ">Email</Label>
	<Input
		type="email"
		name="email"
		required
		value={form?.data?.email ?? ''}
		color={form?.error?.email ? 'red' : 'base'}
	/>
	{#if form?.error?.email}
		<Helper class="mt-2" color="red">{form?.error?.email[0]}</Helper>
	{/if}
</div>
<div class="self-end">
	<Button outline color="primary" on:click={back}>Back</Button>
	<Button color="primary" type="submit">Sign up</Button>
</div>

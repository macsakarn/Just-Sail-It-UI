<script lang="ts">
	import { Heading, Img } from 'flowbite-svelte';
	import type { ActionData } from './$types';
	import FormSignIn from './FormSignIn.svelte';
	import Stepper from './Stepper.svelte';
	import WalletConnect from './WalletConnect.svelte';
	import { enhance } from '$app/forms';
	import { notifications } from '$lib/notifications';

	export let form: ActionData;

	let address = '';
	let header = ['Connect your wallet', 'Create your account', 'Welcome Pirate '];
	let step = 0;

	function _handleStep(event: CustomEvent) {
		step = event.detail.page;
	}

	function _handlePublicAddress(event: CustomEvent) {
		address = event.detail.address;
	}

	$: if (form?.error.message) {
		notifications.danger(form?.error.message[0], 3000);
	}
</script>

<main class="text-center grid place-items-center gap-12">
	<Stepper {step} />

	<Heading tag="h4" color="text-web-black">{header[step]}</Heading>

	{#if step === 0}
		<section class="max-w-xs w-full flex flex-col gap-8">
			<WalletConnect on:next={_handleStep} on:setAddress={_handlePublicAddress} />
		</section>
	{:else if step === 1}
		<form
			use:enhance
			method="POST"
			action="?/register"
			class="max-w-md w-full flex flex-col text-web-black bg-white p-12 rounded-2xl shadow-md text-left"
		>
			<FormSignIn publicAddress={address} on:back={_handleStep} on:next={_handleStep} {form} />
		</form>
	{:else}
		<Img src="/image/welcome.png" size="max-w-2xl" alt="welcome" />
	{/if}
</main>

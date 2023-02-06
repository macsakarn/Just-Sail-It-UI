<script lang="ts">
	import { Heading, A, Card, P, Img } from 'flowbite-svelte'
	import { createEventDispatcher } from 'svelte'
	import { notifications } from '$lib/notifications'
	import { fetchApi } from '$lib/fetch'
	import { getNetworkId } from '$lib/web3'
	import { ethers } from 'ethers'
	import { goto } from '$app/navigation'
	const dispatch = createEventDispatcher()

	async function connectMetaMask() {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		if (!(window as any).ethereum) {
			notifications.danger("Don't forget to install metamask.", 3000)
			return
		}

		const { networkId, error } = await getNetworkId()
		if (error || networkId !== '0x5') {
			notifications.danger('Please change network to Goerli', 3000)
			return
		}
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const provider = new ethers.providers.Web3Provider((window as any).ethereum)
		await provider.send('eth_requestAccounts', [])
		const signer = provider.getSigner()
		const address = await signer.getAddress()

		const res: Response = await fetchApi('POST', '/auth/login', { pubId: address }, 'api')

		if (res.status === 404) {
			dispatch('setAddress', {
				address: address
			})

			dispatch('next', {
				page: 1
			})
			return
		}
		const response = await res.json()
		const message = `I am signing my one-time nonce: ${response.nounce}`
		const signature = await signer.signMessage(message)

		fetchApi('POST', '/login', { signature, pubId: address }, 'server').then((res) =>
			goto(res.url, { invalidateAll: true })
		)
	}
</script>

<button on:click={connectMetaMask}>
	<Card padding="none" class="hover:bg-gray-50">
		<div class="flex items-center justify-between px-4 py-2">
			<P weight="semibold" size="xl">MetaMask</P>
			<Img src="/image/MetaMask.png" size="w-20" />
		</div>
	</Card>
</button>

<Heading tag="h5" customSize=""><A aClass="inline-flex items-center">Show more options</A></Heading>

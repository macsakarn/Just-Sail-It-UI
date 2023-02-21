import { writable, get } from 'svelte/store'
import { ethers } from 'ethers'
import { PUBLIC_CONTRACT_ADDRESS } from '$env/static/public'
import ABI from './ABI.json'

function createWeb3() {
	const provider = writable()
	const signer = writable()
	const contract = writable()

	async function init() {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		provider.set(new ethers.providers.Web3Provider((window as any).ethereum, 'any'))
		const tmpProvider = get(provider) as ethers.providers.Web3Provider
		await tmpProvider.send('eth_requestAccounts', [])

		signer.set(tmpProvider.getSigner())

		contract.set(
			new ethers.Contract(
				PUBLIC_CONTRACT_ADDRESS,
				ABI,
				get(signer) as ethers.providers.JsonRpcSigner
			)
		)
	}

	async function signMessage(nounce: number) {
		const message = `I am signing my one-time nonce: ${nounce}`
		const signers = get(signer) as ethers.providers.JsonRpcSigner
		return await signers.signMessage(message)
	}

	return {
		provider,
		signer,
		contract,
		init,
		signMessage
	}
}

export const web3 = createWeb3()

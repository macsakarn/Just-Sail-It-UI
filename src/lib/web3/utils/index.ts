export async function getNetworkId(): Promise<{ networkId: string; error: boolean }> {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	if ((window as any).ethereum) {
		try {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			const networkId = await (window as any).ethereum.request({
				method: 'eth_chainId'
			})
			return {
				networkId,
				error: false
			}
		} catch (error) {
			return {
				networkId: '',
				error: true
			}
		}
	}
	return {
		networkId: '',
		error: true
	}
}

export function checkWallet() {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	if (!(window as any).ethereum) {
		return { error: true }
	}
	return { error: false }
}

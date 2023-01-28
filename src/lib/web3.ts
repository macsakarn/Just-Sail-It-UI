export async function getCurrentWalletConnected(): Promise<{ address: string; error: boolean }> {
	if ((window as any).ethereum) {
		try {
			const addressArray: string[] = await (window as any).ethereum.request({
				method: 'eth_accounts'
			});
			if (addressArray.length > 0) {
				return {
					address: addressArray[0],
					error: false
				};
			}
			return {
				address: '',
				error: true
			};
		} catch (err) {
			return {
				address: '',
				error: true
			};
		}
	}
	return {
		address: '',
		error: true
	};
}

export async function getNetworkId(): Promise<{ networkId: string; error: boolean }> {
	if ((window as any).ethereum) {
		try {
			const networkId = await (window as any).ethereum.request({
				method: 'eth_chainId'
			});
			return {
				networkId,
				error: false
			};
		} catch (error) {
			return {
				networkId: '',
				error: true
			};
		}
	}
	return {
		networkId: '',
		error: true
	};
}

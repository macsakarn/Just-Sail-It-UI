import { PUBLIC_API_URL } from '$env/static/public'

async function fetchApi(
	method: 'GET' | 'POST' | 'PUT' | 'DELETE',
	url: string,
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	body: any,
	mode: 'server' | 'api'
) {
	const BASE_URL = mode === 'api' ? PUBLIC_API_URL : ''

	return await fetch(`${BASE_URL}${url}`, {
		method,
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(body)
	})
}

export { fetchApi }

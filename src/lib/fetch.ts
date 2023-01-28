import { PUBLIC_API_URL } from '$env/static/public';

async function fetchApi(method: 'GET' | 'POST' | 'PUT' | 'DELETE', url: string, body: any) {
	return await fetch(`${PUBLIC_API_URL}${url}`, {
		method,
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(body)
	});
}

export { fetchApi };

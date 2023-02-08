import { redirect, error } from '@sveltejs/kit'
import type { RequestHandler } from './$types'
import { PUBLIC_API_URL } from '$env/static/public'

export const POST = (async ({ params, request, fetch, cookies, locals }) => {
	const formData = await request.formData()
	const session = cookies.get('session') ?? ''
	const userId = locals.user.userId
	const { slug } = params

	if (!session) {
		throw redirect(301, '/login')
	}

	switch (slug) {
		case 'uploadProfile':
			await fetch(`${PUBLIC_API_URL}/image/profile/${userId}`, {
				method: 'PUT',
				headers: {
					authorization: `Bearer ${session}`
				},
				body: formData
			})
			throw redirect(303, '/profile')
		case 'uploadCover':
			await fetch(`${PUBLIC_API_URL}/image/profile/${userId}`, {
				method: 'PUT',
				headers: {
					authorization: `Bearer ${session}`
				},
				body: formData
			})
			throw redirect(303, '/profile')
		default:
			throw error(404, 'Invalid endpoint.')
	}
}) satisfies RequestHandler

import type { Handle } from '@sveltejs/kit'
import { PUBLIC_API_URL } from '$env/static/public'

export const handle = (async ({ event, resolve }) => {
	const session = event.cookies.get('session')

	if (!session) {
		if (event.url.pathname.startsWith('/profile')) {
			return Response.redirect(event.url.origin + '/login')
		}
		return await resolve(event)
	}

	const res: Response = await event.fetch(`${PUBLIC_API_URL}/auth/check/token`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			authorization: `Bearer ${session}`
		}
	})

	if (res.status === 401) {
		event.cookies.set('session', '', {
			path: '/',
			expires: new Date(0)
		})
		return await resolve(event)
	}

	const { payload: user } = await res.json()
	if (user) {
		event.locals.user = {
			userId: user.userId,
			username: user.username,
			image: user.image,
			image_cover: user.image_cover
		}
	}

	const response = await resolve(event)

	return response
}) satisfies Handle

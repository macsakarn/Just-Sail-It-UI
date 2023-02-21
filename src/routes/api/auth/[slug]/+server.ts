import type { RequestHandler } from './$types'
import { redirect, error } from '@sveltejs/kit'
import { PUBLIC_API_URL } from '$env/static/public'

interface requestType {
	pubId: string
	signature: string
}

export const POST: RequestHandler = async ({ cookies, params, locals, request, fetch }) => {
	const { slug } = params
	switch (slug) {
		case 'logout': {
			cookies.delete('session', { path: '/' })
			locals.user = null
			throw redirect(302, '/')
		}
		case 'login': {
			const body: requestType = await request.json()

			if (!body.signature || !body.pubId) {
				throw error(400, 'can u send signature plz!!!')
			}

			const res: Response = await fetch(`${PUBLIC_API_URL}/auth/login`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(body)
			})
			const response = await res.json()

			cookies.set('session', response.token, {
				// send cookie for every page
				path: '/',
				// server side only cookie so you can't use `document.cookie`
				httpOnly: true,
				// only requests from same site can send cookies
				// https://developer.mozilla.org/en-US/docs/Glossary/CSRF
				sameSite: 'strict',
				// set cookie to expire after a month
				maxAge: 60 * 60 * 24 * 30
			})

			throw redirect(302, '/')
		}
		default:
			throw error(404, 'Invalid endpoint.')
	}
}

import type { Actions } from './$types'
import { redirect } from '@sveltejs/kit'

export const actions = {
	logout: async ({ cookies }) => {
		cookies.set('session', '', {
			path: '/',
			expires: new Date(0)
		})
		throw redirect(302, '/')
	}
} satisfies Actions

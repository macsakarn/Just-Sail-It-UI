import type { PageServerLoad, Actions } from './$types';
import { registerSchema } from '$lib/validation/register';
import { ZodError } from 'zod';
import { fail, redirect } from '@sveltejs/kit';
import { PUBLIC_API_URL } from '$env/static/public';

export const load = (async () => {
	return {};
}) satisfies PageServerLoad;

export const actions = {
	register: async ({ request, fetch, cookies }) => {
		const formData = await request.formData();

		const identify = {
			pubId: formData.get('publicAddress')?.toString(),
			username: formData.get('username')?.toString(),
			email: formData.get('email')?.toString()
		};

		try {
			registerSchema.parse(identify);
		} catch (err: unknown) {
			if (err instanceof ZodError) {
				const { fieldErrors: error } = err.flatten();
				return fail(400, { data: identify, error });
			}
		}

		const res: Response = await fetch(`${PUBLIC_API_URL}/user/register`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(identify)
		});

		if (res.status !== 200) {
			const error = {
				message: ['Something Went Wrong']
			};
			return fail(400, { data: identify, error });
		} else {
			const response = await res.json();

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
			});

			throw redirect(302, '/');
		}
	}
} satisfies Actions;

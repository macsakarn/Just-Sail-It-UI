import type { RequestHandler } from './$types';
import { redirect, error } from "@sveltejs/kit"

export const POST: RequestHandler = async ({cookies, params}) => {
    const { slug } = params
    switch (slug) {
        case 'logout':
            cookies.set('session', '', {
                path: '/',
                expires: new Date(0)
            })
            throw redirect(302, '/')
        default:
            throw error(404,"Invalid endpoint.")
    }
};
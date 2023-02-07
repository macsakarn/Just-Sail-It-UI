import type { RequestHandler } from './$types';
import { redirect } from "@sveltejs/kit"

export const POST: RequestHandler = async ({cookies}) => {
    cookies.set('session', '', {
        path: '/',
        expires: new Date(0)
    })
    throw redirect(302, '/')
};
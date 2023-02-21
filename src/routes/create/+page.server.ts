import type { Actions } from './$types'
import { createProjectSchema } from '$lib/validation/createProject'
import { fail } from '@sveltejs/kit'

export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData()

		const project = {
			name: formData.get('name') as string,
			category: formData.get('category') as string,
			description: formData.get('description') as string,
			start_fund: formData.get('start_fund') as string,
			end_fund: formData.get('end_fund') as string,
			goal: Number(formData.get('goal')),
			story: formData.get('story') as string,
			faq: formData.get('faq') as string,
			website: formData.get('website') as string,
			facebook: formData.get('facebook') as string,
			linkedin: formData.get('linkedin') as string,
			github: formData.get('github') as string,
			instagram: formData.get('instagram') as string,
			youtube: formData.get('youtube') as string
		}

		// validation form use zod
		const validation = createProjectSchema.safeParse(project)

		if (!validation.success) {
			const data = {
				success: false,
				data: project,
				errors: validation.error.flatten().fieldErrors
			}
			return fail(400, data)
		}

		return { success: true, data: project }
	}
} satisfies Actions

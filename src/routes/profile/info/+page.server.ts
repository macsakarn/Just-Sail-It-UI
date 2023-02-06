import type { PageServerLoad, Actions } from './$types'
import type { ProfilesType, EducationsType, WorksExpType } from '$lib/types/ProfilesType'

import { PUBLIC_API_URL } from '$env/static/public'

let profile: ProfilesType

export const load = (async ({ fetch, locals }) => {
	const res: Response = await fetch(`${PUBLIC_API_URL}/user/profile/${locals.user.userId}`)
	profile = await res.json()
	return {
		profile
	}
}) satisfies PageServerLoad

export const actions = {
	updateProfile: async ({ request, cookies, locals }) => {
		const data = await request.formData()
		profile = {
			...profile,
			about_me: data.get('about_me')?.toString() ?? profile.about_me,
			location: data.get('location')?.toString() ?? profile.location,
			website: data.get('website')?.toString() ?? profile.website,
			portfolio: data.get('portfolio')?.toString() ?? profile.portfolio,
			email: data.get('email')?.toString() ?? profile.email
		}
		const session = cookies.get('session') ?? ''
		await updateProfile(session, locals.user.userId)
	},
	updateEducations: async ({ request, cookies, locals }) => {
		const data = await request.formData()
		const education: EducationsType = {
			id: data.get('id')?.toString() ?? '',
			university: data.get('university')?.toString() ?? '',
			faculty: data.get('faculty')?.toString() ?? '',
			major: data.get('major')?.toString() ?? '',
			years: data.get('years')?.toString() ?? ''
		}

		const session = cookies.get('session') ?? ''

		if (!education.id) {
			education.id = crypto.randomUUID()

			if (!profile.educations) {
				profile.educations = []
			}
			profile.educations?.push(education)

			await updateProfile(session, locals.user.userId)
		} else {
			const newEdu = profile.educations?.map((obj) => {
				if (obj.id === education.id) {
					return education
				}
				return obj
			})
			if (newEdu) {
				profile.educations = newEdu

				await updateProfile(session, locals.user.userId)
			}
		}
	},
	deleteEducation: async ({ request, cookies, locals }) => {
		const data = await request.formData()
		const id = String(data.get('id'))

		const updateIndex = profile.educations?.filter((obj) => obj.id !== id)

		if (updateIndex) {
			profile.educations = updateIndex
			const session = cookies.get('session') ?? ''
			await updateProfile(session, locals.user.userId)
		}
	},
	updateExp: async ({ request, cookies, locals }) => {
		const data = await request.formData()
		const workExp: WorksExpType = {
			id: String(data.get('id')),
			position: String(data.get('position')),
			company_name: String(data.get('company_name')),
			date_start: String(data.get('date_start')),
			date_now: String(data.get('date_now')),
			description: String(data.get('description'))
		}

		const session = cookies.get('session') ?? ''

		if (!workExp.id) {
			workExp.id = crypto.randomUUID()
			if (!profile.works_exp) {
				profile.works_exp = []
			}
			profile.works_exp?.push(workExp)
			await updateProfile(session, locals.user.userId)
		} else {
			const newWorkExp = profile.works_exp?.map((obj) => {
				if (obj.id === workExp.id) {
					return workExp
				}
				return obj
			})
			if (newWorkExp) {
				profile.works_exp = newWorkExp
				const session = cookies.get('session') ?? ''
				await updateProfile(session, locals.user.userId)
			}
		}
	},
	deleteExp: async ({ request, cookies, locals }) => {
		const id = String((await request.formData()).get('id'))

		const deleteWorkExp = profile.works_exp?.filter((obj) => obj.id !== id)

		if (deleteWorkExp) {
			profile.works_exp = deleteWorkExp
			const session = cookies.get('session') ?? ''
			await updateProfile(session, locals.user.userId)
		}
	},
	newSkill: async ({ request, cookies, locals }) => {
		const skill = (await request.formData()).get('skill')
		if (!profile.skills) {
			profile.skills = []
		}
		profile.skills?.push(String(skill))
		const session = cookies.get('session') ?? ''
		await updateProfile(session, locals.user.userId)
	},
	delSkill: async ({ request, cookies, locals }) => {
		const skill = (await request.formData()).get('delete')
		const filteredSkill = profile.skills?.filter((val) => val !== skill)
		if (filteredSkill) {
			profile.skills = filteredSkill
			const session = cookies.get('session') ?? ''
			await updateProfile(session, locals.user.userId)
		}
	},
	newLanguage: async ({ request, cookies, locals }) => {
		const language = (await request.formData()).get('language')
		if (!profile.languages) {
			profile.languages = []
		}
		profile.languages?.push(String(language))
		const session = cookies.get('session') ?? ''
		await updateProfile(session, locals.user.userId)
	},
	delLanguage: async ({ request, cookies, locals }) => {
		const skill = (await request.formData()).get('delete')
		const filteredSkill = profile.languages?.filter((val) => val !== skill)
		if (filteredSkill) {
			profile.languages = filteredSkill
			const session = cookies.get('session') ?? ''
			await updateProfile(session, locals.user.userId)
		}
	}
} satisfies Actions

async function updateProfile(session: string, userId: string) {
	return await fetch(`${PUBLIC_API_URL}/user/profile/update/${userId}`, {
		method: 'PATCH',
		headers: {
			'Content-Type': 'application/json',
			authorization: `Bearer ${session}`
		},
		body: JSON.stringify(profile)
	})
}

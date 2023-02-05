export interface ProfilesType {
	id: string
	username: string
	email: string
	nounce: string
	location: null | string
	portfolio: null | string
	website: null | string
	user_img: string
	about_me: null | string
	educations: EducationsType[] | null
	skills: string[] | null
	languages: string[] | null
	works_exp: WorksExpType[] | null
}

export interface EducationsType {
	id: string
	university: string
	faculty: string
	major: string
	years: string
}

export interface WorksExpType {
	id: string
	position: string
	company_name: string
	date_start: string
	date_now: string
	description: string
}

export const dummyProfiles: ProfilesType = {
	id: '0x99aA098E2A56a085B51a64725924B60874fEB649',
	username: 'macsakarn',
	email: 'mac@gmail.com',
	nounce: '87173739',
	location: 'Thailand',
	portfolio: 'www.mac.com',
	website: 'www.mac.com',
	user_img: 'https://api.dicebear.com/5.x/adventurer/svg/seed=0.1823832866770405',
	about_me: 'asdadsasdasdasdasdasd',
	educations: [
		{
			id: '53210c18-3ee0-4d09-a41a-ddc41461f43d',
			university: 'wsk',
			faculty: 'com',
			major: 'eazy',
			years: '4'
		},
		{
			id: '53210c18-3ee0-4d09-a41a-ddc41461f43a',
			university: 'KMITL',
			faculty: 'IT',
			major: 'SE',
			years: '4'
		}
	],
	skills: ['Dance', 'C-Walk'],
	languages: ['thai', 'eng'],
	works_exp: [
		{
			id: '53210c18-3ee0-4d09-a41a-ddc41461a43d',
			position: 'Dancer',
			company_name: 'YG',
			date_start: '20-20-20',
			date_now: '20-20-20',
			description: 'Dance with me free wifi'
		},
		{
			id: '53210c18-3ee0-4d09-a41a-ddc41461f43d',
			position: 'cover music',
			company_name: 'GMM',
			date_start: '20-20-20',
			date_now: '20-20-20',
			description: 'Sing with me free wifi'
		}
	]
}

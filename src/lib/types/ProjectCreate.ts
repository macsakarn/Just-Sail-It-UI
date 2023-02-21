export interface ProjectCreateType {
	name: string
	category: string
	description: string
	start_fund: string
	end_fund: string
	goal: number
	story: string
	faq: string
	website: string
	facebook: string
	linkedin: string
	github: string
	instagram: string
	youtube: string
	[key: string]: string | number
}

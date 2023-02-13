import type { PageServerLoad } from './$types'

const dummyData = [
	{
		id: '1',
		title: 'testing by mac 1',
		description: 'lorem ipsum dolor sit amet, consectetur',
		image: 'https://source.unsplash.com/random',
		category: 'mac',
		balance: 10
	},
	{
		id: '2',
		title: 'testing by mac 2',
		description: 'lorem ipsum dolor sit amet, consectetur',
		image: 'https://source.unsplash.com/random',
		category: 'mac',
		balance: 10
	},
	{
		id: '3',
		title: 'testing by mac 3',
		description: 'lorem ipsum dolor sit amet, consectetur',
		image: 'https://source.unsplash.com/random',
		category: 'mac',
		balance: 10
	},
	{
		id: '4',
		title: 'testing by mac 4',
		description: 'lorem ipsum dolor sit amet, consectetur',
		image: 'https://source.unsplash.com/random',
		category: 'mac',
		balance: 10
	}
]

export const load = (async () => {
	return {
		popularProjects: dummyData
	}
}) satisfies PageServerLoad

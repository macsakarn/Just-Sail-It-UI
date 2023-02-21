const config = {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],

	theme: {
		extend: {
			colors: {
				primary: {
					50: '#6667AB',
					100: '#6667AB',
					200: '#6667AB',
					300: '#6667AB',
					400: '#6667AB',
					500: '#6667AB',
					600: '#6667AB',
					700: '#6667AB',
					800: '#6667AB',
					900: '#6667AB'
				},
				second: '#9C9AE3',
				'web-white': '#F9F8FF',
				'web-black': '#464555',
				'web-gray': '#EBEBEB',
				'dark-gray': '#ABA9BB'
			}
		}
	},

	plugins: [
		require('flowbite/plugin'),
		require('@tailwindcss/line-clamp'),
		require('@tailwindcss/typography')
	],
	darkMode: 'class'
}

module.exports = config

import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				brown: '#1f1e1d',
				blue: '#e5f0f3',
				ivory: '#F8DDC0',
				green: '#d5fcdf',
				orange:'#ed7c48'
			},
			screens: {
				'2xl': '1600px',
			},
		},
	},
	plugins: [],
};
export default config;

import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		fontSize: {
			xs: '1.3rem',
			sm: '1.5rem',
			md: '1.7rem',
			lg: '2rem',
			xl: '2.56rem',
			'1xl': '3rem',
			'2xl': '4.36rem',
			'3xl': '6rem',
			'4xl': '7rem',
			'vw-sm': '1.9vw',
		},
		extend: {
			colors: {
				white: '#fdfffc',
				brown: '#1f1e1d',
				blue: '#e5f0f3',
				ivory: 'rgb(251,245,222)',
				green: '#d5fcdf',
				orange: '#ed7c48',
				pink: '#f8edeb',
				purple: '#65449e',
				grey: 'rgb(226,227,232)',
			},
			fontFamily: {
				header: 'SejonghospitalBold',
				content: 'GothicA1-Light',
			},
			screens: {
				'2xl': '1600px',
			},
			backgroundImage: {
				forest: 'url(/cover.png)',
			},
		},
	},
	plugins: [],
};
export default config;

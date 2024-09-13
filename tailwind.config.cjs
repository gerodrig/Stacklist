/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			width: {
				96: '24rem',
			},
			colors: {
				primary: '#1E3A8A',
				secondary: '#F3F4F6',
				accent: '#F97316',
				textPrimary: '#374151',
				cardBg: '#FFFFFF',
				borderGray: '#D1D5DB',
			}
		},
	},
	plugins: [],
};


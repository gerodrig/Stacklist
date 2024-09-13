// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import nodejs from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind({
		applyBaseStyles: true,
	})],
	output: 'hybrid',
	adapter: nodejs({ mode: 'standalone' }),
	vite: {
		define: {
			'process.env.TMDB_API_KEY': JSON.stringify(process.env.TMDB_API_KEY),
		},
	},
});

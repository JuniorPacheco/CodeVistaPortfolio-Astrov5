import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			fontFamily: {
				inter: ["Inter", ...defaultTheme.fontFamily.sans],
			},
			colors: {
				"primary": "rgb(74, 108, 247)",
				"secondary": "rgb(9, 14, 52)"
			},
			screens: {
				"mmd": "960px"
			}
		},
	},
	plugins: [],
	darkMode: "class",
}

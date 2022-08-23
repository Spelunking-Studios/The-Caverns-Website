/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
	darkMode: "class",
	content: [
		"./pages/**/*.{js,jsx,ts,tsx}",
		"./components/**/*.{js,jsx,ts,tsx}"
	],
	theme: {
		extend: {
			fontFamily: {
				raleway: ["Raleway", "sans-serif"],
				"titillium-web": ["Titillium Web", "sans-serif"],
				cinzel: ["Cinzel", "sans-serif"],
				"cinzel-decorative": ["Cinzel Decorative", "sans-serif"]
			}
			/*colors: {
				blue: {
					50: "var(--colors-blue-50)",
					100: "var(--colors-blue-100)",
					200: "var(--colors-blue-200)",
					300: "var(--colors-blue-300)",
					400: "var(--colors-blue-400)",
					500: "var(--colors-blue-500)",
					600: "var(--colors-blue-600)",
					700: "var(--colors-blue-700)",
					800: "var(--colors-blue-800)",
					900: "var(--colors-blue-900)"
				}
			}*/
		}
	},
	plugins: [
        require('tailwind-scrollbar')
    ],
}

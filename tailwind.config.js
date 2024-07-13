const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
		"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
      fontFamily: {
          'montserrat': ['Montserrat'],
      },
			colors: {
				primary: '#03577F',
				"primary-dark": '#023145',
				'primary-lighter': '#1E7395',
				'primary-light': '#5EC1CA',
				'default-100': '#1E7395',
				'default-500': '#fff',
				'primary-foreground': '5EC1CA',
				secondary: '#F2BC1A'
			}
  }
	},
	darkMode: "class",
  plugins: [nextui()],
};

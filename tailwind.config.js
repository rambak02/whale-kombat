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
				primaryDark: '#023145',
				primaryLighter: '##1E7395',
				primaryLight: '##5EC1CA'
			}
  }
	},
	darkMode: "class",
  plugins: [nextui()],
};

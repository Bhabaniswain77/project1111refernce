/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
	  extend: {
		colors: {
		  'deep-greenish-blue': '#004948',
		  'deep-greenish-bluies': '#006867', // Custom color code
		},
	  },
	},
	variants: {},
	plugins: [],
  };
  
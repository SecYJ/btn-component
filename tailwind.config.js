/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#dc3545",
				secondary: "#0dcaf0",
				tertiary: "#6c757d",
			},
		},
	},
	plugins: [],
};

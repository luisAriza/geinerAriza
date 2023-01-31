/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				primary: "#FFDD33",
				secondary: "#191D34",
				seconLight: "#212645",
				seconDark: "#111322",
				seconLight50: "rgba(58, 65, 120, 0.5)",
			},
			backgroundColor: (theme) => ({
				...theme("colors"),
				primary: "#FFDD33",
				secondary: "#191D34",
				seconLight: "#212645",
				seconDark: "#111322",
				seconLight50: "rgba(58, 65, 120, 0.5)",
			}),
			fontFamily: {
				title: ["IstokWeb", "sans-serif"],
				body: ["OpenSans", "sans-serif"],
			},
			dropShadow: {
				card: "0 4px 8px #111322",
				title: "0 4px 4px #111322",
			},
		},
	},
	plugins: [],
};

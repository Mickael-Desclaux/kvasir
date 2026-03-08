/** @type {import('tailwindcss').Config} */
module.exports = {
	// NOTE: Update this to include the paths to all files that contain Nativewind classes.
	content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
	presets: [require("nativewind/preset")],
	theme: {
		extend: {
			colors: {
				gold: {
					DEFAULT: "#C9A84C", // bg-gold, text-gold
					light: "#E2C87A", // bg-gold-light
					dim: "#6B5A2C", // bg-gold-dim
				},

				background: "#0C0C10",
				surface: {
					DEFAULT: "#13131A", // bg-surface
					2: "#1A1A24", // bg-surface-2
					3: "#22222E", // bg-surface-3
				},

				primary: "#F0EDE6",
				secondary: "#9A9488",
				tertiary: "#5A574F",

				domain: {
					sovereignty: "#C9A84C",
					sea: "#4A7FA5",
					wisdom: "#6A9A6A",
					war: "#A05050",
					death: "#7A5A9A",
					sun: "#C96B1A",
					magic: "#5A7A9A",
				},
			},

			fontFamily: {
				cinzel: ["Cinzel_400Regular"],
				inter: ["Inter"],
			},

			borderRadius: {
				sm: "8px",
				md: "12px",
				card: "16px",
				xl: "20px",
				chip: "9999px",
			},

			spacing: {
				screen: "20px",
				card: "12px",
				section: "18px",
			},

			height: {
				"bottom-nav": "64px",
				"god-card": "44px",
				featured: "180px",
			},

			width: {
				featured: "140px",
			},
		},
	},
	plugins: [],
};

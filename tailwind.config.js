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
					life: "#4CAF50",
					destruction: "#E53935",
					nature: "#43A047",
					sky: "#FDD835",
					sea: "#1E90FF",
					fate: "#7E57C2",
					knowledge: "#1ABC9C",
					society: "#FB8C00",
					emotion: "#EC407A",
					underworld: "#6A1B9A",
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

			boxShadow: {
				god: "0 0 10px rgba(0,0,0,0.4)",
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

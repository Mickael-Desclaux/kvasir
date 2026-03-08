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
					sovereignty: "#C9A84C", // Foudre, Souveraineté (Zeus…)
					sea: "#4A7FA5", // Mer, Eau (Poséidon…)
					wisdom: "#6A9A6A", // Sagesse, Nature (Athéna…)
					war: "#A05050", // Guerre, Feu (Arès…)
					death: "#7A5A9A", // Mort, Mystère (Hadès…)
					sun: "#C96B1A", // Soleil (Rê, Apollon…)
					magic: "#5A7A9A", // Magie, Savoir (Odin…)
				},
			},

			fontFamily: {
				cinzel: ["Cinzel_400Regular"], // titres, noms, navigation
				inter: ["Inter"], // corps de texte, descriptions
			},

			borderRadius: {
				sm: "8px",
				md: "12px",
				card: "16px",
				xl: "20px",
				chip: "9999px",
			},

			spacing: {
				screen: "20px", // padding horizontal des écrans
				card: "12px", // gap entre les cartes
				section: "18px", // espacement entre sections
			},

			height: {
				"bottom-nav": "64px",
				"god-card": "44px", // hauteur de l'icône dans une carte
				featured: "180px", // hauteur des cartes featured
			},

			width: {
				featured: "140px", // largeur des cartes featured
			},
		},
	},
	plugins: [],
};

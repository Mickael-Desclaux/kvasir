import { God } from "@/types/gods";

export const GREEK_GODS: God[] = [
	{
		id: 1,
		name: "Zeus",
		icon: "⚡",
		pantheon: {
			id: 1,
			name: "Grec",
			icon: "Ω",
		},
		title: "Dieu de la foudre",
		mainTags: ["Olympien", "Dieu de la foudre"],
		domains: ["ciel", "foudre", "justice"],
		description:
			"Zeus est le roi des dieux dans la mythologie grecque et la divinité suprême du panthéon olympien. Dieu du ciel et de la foudre, il gouverne les autres dieux et veille au respect de l'ordre, des lois et de la justice.",
		symbols: ["foudre", "aigle", "chêne", "trône"],
		attributes: ["foudre", "sceptre", "aigle", "égide"],
		relations: [
			{
				type: "parents",
				entities: ["Cronos", "Rhéa"],
			},
			{
				type: "spouse",
				entities: ["Héra"],
			},
			{
				type: "siblings",
				entities: ["Poséidon", "Hadès", "Déméter", "Hestia", "Héra"],
			},
			{
				type: "children",
				entities: [
					"Athéna",
					"Apollon",
					"Artémis",
					"Arès",
					"Hermès",
					"Dionysos",
					"Héphaïstos",
					"Perséphone",
					"Héraclès",
					"Hélène",
					"Minos",
				],
			},
		],
		sources: ["https://fr.wikipedia.org/wiki/Zeus"],
	},
	{
		id: 2,
		name: "Héra",
		icon: "👑",
		pantheon: {
			id: 1,
			name: "Grec",
			icon: "Ω",
		},
		title: "Reine de l'Olympe",
		mainTags: ["Olympienne", "Reine de l'olympe"],
		domains: ["mariage", "famille", "femmes"],
		description:
			"Déesse du mariage et reine des dieux, Héra est l'épouse de Zeus et la protectrice des femmes et de la vie conjugale. Fille de Cronos et Rhéa, elle règne sur l'Olympe aux côtés de Zeus et est connue pour sa jalousie envers les nombreuses conquêtes de son époux.",
		symbols: ["paon", "coucou", "grenade", "diadème"],
		attributes: ["sceptre", "diadème", "voile"],
		relations: [
			{
				type: "parents",
				entities: ["Cronos", "Rhéa"],
			},
			{
				type: "spouse",
				entities: ["Zeus"],
			},
			{
				type: "siblings",
				entities: ["Poséidon", "Hadès", "Déméter", "Hestia", "Zeus"],
			},
			{
				type: "children",
				entities: ["Hébé", "Arès", "Héphaïstos", "Eileithyia"],
			},
		],
		sources: ["https://fr.wikipedia.org/wiki/H%C3%A9ra"],
	},
	{
		id: 3,
		name: "Poséidon",
		icon: "🔱",
		pantheon: {
			id: 1,
			name: "Grec",
			icon: "Ω",
		},
		title: "Dieu des mers",
		mainTags: ["Olympien", "Dieu de le mer"],
		domains: ["mer", "chevaux", "tempêtes"],
		description:
			"Poséidon est le dieu des mers, des océans et des tremblements de terre. Frère de Zeus et d'Hadès, il règne sur les eaux du monde depuis son palais sous-marin et commande aux tempêtes, aux flots et aux chevaux.",
		symbols: ["trident", "cheval", "dauphin", "taureau"],
		attributes: ["trident", "couronne de corail"],
		relations: [
			{
				type: "parents",
				entities: ["Cronos", "Rhéa"],
			},
			{
				type: "spouse",
				entities: ["Amphitrite"],
			},
			{
				type: "siblings",
				entities: ["Zeus", "Hadès", "Déméter", "Hestia", "Héra"],
			},
			{
				type: "children",
				entities: ["Triton", "Polyphème", "Thésée"],
			},
		],
		sources: ["https://fr.wikipedia.org/wiki/Pos%C3%A9idon"],
	},
	{
		id: 4,
		name: "Athéna",
		icon: "🦉",
		pantheon: {
			id: 1,
			name: "Grec",
			icon: "Ω",
		},
		title: "Déesse de la sagesse",
		mainTags: ["Olympienne", "Déesse de la sagesse"],
		domains: ["sagesse", "guerre", "artisanat", "justice", "stratégie"],
		description:
			"Athéna est la déesse de la sagesse, de la guerre stratégique et de l'artisanat. Née directement du crâne de Zeus tout armée, elle est la protectrice d'Athènes et incarne l'intelligence, la raison et la justice.",
		symbols: ["chouette", "olivier", "lance", "égide"],
		attributes: ["casque", "lance", "bouclier", "égide"],
		relations: [
			{
				type: "parents",
				entities: ["Zeus", "Métis"],
			},
			{
				type: "siblings",
				entities: ["Apollon", "Artémis", "Arès", "Hermès", "Dionysos"],
			},
		],
		sources: ["https://fr.wikipedia.org/wiki/Ath%C3%A9na"],
	},
	{
		id: 5,
		name: "Apollon",
		icon: "🎶",
		pantheon: {
			id: 1,
			name: "Grec",
			icon: "Ω",
		},
		title: "Dieu du soleil et des arts",
		mainTags: ["Olympien", "Dieu du soleil et de la musique"],
		domains: ["soleil", "musique", "poésie", "art", "prophétie"],
		description:
			"Apollon est le dieu du soleil, de la musique, de la poésie et de la prophétie. Fils de Zeus et de Léto, frère jumeau d'Artémis, il est l'un des dieux les plus vénérés du panthéon grec et préside à l'oracle de Delphes.",
		symbols: ["lyre", "laurier", "corbeau", "arc", "soleil"],
		attributes: ["lyre", "arc d'argent", "laurier"],
		relations: [
			{
				type: "parents",
				entities: ["Zeus", "Léto"],
			},
			{
				type: "twins",
				entities: ["Artémis"],
			},
			{
				type: "siblings",
				entities: ["Athéna", "Arès", "Hermès", "Dionysos"],
			},
		],
		sources: ["https://fr.wikipedia.org/wiki/Apollon"],
	},
	{
		id: 6,
		name: "Artémis",
		icon: "🏹",
		pantheon: {
			id: 1,
			name: "Grec",
			icon: "Ω",
		},
		title: "Déesse de la chasse",
		mainTags: ["Olympienne", "Déesse de la chasse"],
		domains: ["chasse", "lune", "nature", "chasteté"],
		description:
			"Artémis est la déesse de la chasse, de la lune et de la nature sauvage. Fille de Zeus et de Léto, sœur jumelle d'Apollon, elle parcourt les forêts avec ses nymphes et est la protectrice des animaux et des jeunes filles.",
		symbols: ["arc", "lune", "cerf", "cyprès"],
		attributes: ["arc d'or", "carquois", "croissant de lune"],
		relations: [
			{
				type: "parents",
				entities: ["Zeus", "Léto"],
			},
			{
				type: "twins",
				entities: ["Apollon"],
			},
			{
				type: "siblings",
				entities: ["Athéna", "Arès", "Hermès", "Dionysos"],
			},
		],
		sources: ["https://fr.wikipedia.org/wiki/Art%C3%A9mis"],
	},
];

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
		domains: [
			{
				name: "ciel",
				color: "sky",
			},
			{
				name: "foudre",
				color: "yellow",
			},
			{
				name: "justice",
				color: "indigo",
			},
			{
				name: "ordre",
				color: "indigo",
			},
			{
				name: "souveraineté divine",
				color: "amber",
			},
		],
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
		domains: [
			{
				name: "mariage",
				color: "pink",
			},
			{
				name: "famille",
				color: "orange",
			},
			{
				name: "femmes",
				color: "pink",
			},
			{
				name: "ciel",
				color: "sky",
			},
		],
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
		domains: [
			{
				name: "mer",
				color: "cyan",
			},
			{
				name: "tremblements de terre",
				color: "stone",
			},
			{
				name: "chevaux",
				color: "amber",
			},
			{
				name: "tempêtes",
				color: "slate",
			},
		],
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
		domains: [
			{
				name: "sagesse",
				color: "violet",
			},
			{
				name: "guerre",
				color: "red",
			},
			{
				name: "artisanat",
				color: "orange",
			},
			{
				name: "justice",
				color: "indigo",
			},
			{
				name: "stratégie",
				color: "violet",
			},
		],
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
		domains: [
			{
				name: "soleil",
				color: "yellow",
			},
			{
				name: "musique",
				color: "purple",
			},
			{
				name: "poésie",
				color: "purple",
			},
			{
				name: "arts",
				color: "fuchsia",
			},
			{
				name: "prophétie",
				color: "indigo",
			},
			{
				name: "guérison",
				color: "green",
			},
			{
				name: "lumière",
				color: "yellow",
			},
		],
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
		domains: [
			{
				name: "chasse",
				color: "lime",
			},
			{
				name: "lune",
				color: "slate",
			},
			{
				name: "nature",
				color: "green",
			},
			{
				name: "animaux sauvages",
				color: "lime",
			},
			{
				name: "chasteté",
				color: "white",
			},
			{
				name: "accouchement",
				color: "pink",
			},
		],
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

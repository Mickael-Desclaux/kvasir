export type God = {
	id: number;
	name: string;
	icon: string;
	pantheon: Pantheon;
	title: string;
	domains: Domain[];
	description: string;
	symbols: string[];
	attributes: string[];
	relations: {
		type: string;
		entities: string[];
	}[];
	sources: string[];
};

export type GodPreview = Pick<
	God,
	"id" | "name" | "pantheon" | "title" | "icon" | "description" | "domains"
>;

export type Pantheon = {
	id: number;
	name: string;
	icon: string;
};

export type Color =
	| "sky"
	| "yellow"
	| "indigo"
	| "amber"
	| "pink"
	| "orange"
	| "cyan"
	| "stone"
	| "slate"
	| "violet"
	| "red"
	| "fuchsia"
	| "purple"
	| "green"
	| "lime"
	| "white";

export type Domain = {
	name: string;
	color: Color;
};

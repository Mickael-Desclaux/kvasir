export type God = {
	id: number;
	name: string;
	icon: string;
	pantheon: Pantheon;
	title: string;
	primaryDomain: PrimaryDomain;
	mainTags: string[];
	domains: string[];
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
	"id" | "name" | "pantheon" | "icon" | "mainTags" | "primaryDomain"
>;

export type Pantheon = {
	id: number;
	name: string;
	icon: string;
};

export type PrimaryDomain =
	| "life"
	| "destruction"
	| "nature"
	| "sky"
	| "sea"
	| "fate"
	| "knowledge"
	| "society"
	| "emotion"
	| "underworld";

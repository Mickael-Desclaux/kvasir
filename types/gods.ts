export type God = {
	id: number;
	name: string;
	icon: string;
	pantheon: Pantheon;
	title: string;
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
	"id" | "name" | "pantheon" | "title" | "icon" | "description" | "mainTags"
>;

export type Pantheon = {
	id: number;
	name: string;
	icon: string;
};

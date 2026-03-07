export type God = {
	id: number;
	name: string;
	pantheon: Pantheon;
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

export type GodPreview = Pick<God, "id" | "name" | "pantheon" | "description">;

export type Pantheon = {
	id: number;
	name: string;
	icon: string;
};

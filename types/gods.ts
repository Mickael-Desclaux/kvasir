export type God = {
	id: number;
	name: string;
	pantheon: string;
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

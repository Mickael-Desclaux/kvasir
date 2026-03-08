import { Domain, GodPreview, Pantheon } from "@/types/gods";
import { ReactNode } from "react";
import { Text, View } from "react-native";

type GodCardProps = {
	god: GodPreview;
};

export default function GodCard({ god }: GodCardProps) {
	return (
		<View className="bg-surface-2 p-2 flex rounded-card my-2 border border-domain-sovereignty">
			<CardHeader name={god.name} pantheon={god.pantheon} />
			<Text className="text-secondary text-center mb-2">{god.title}</Text>;
			<CardFooter domains={god.domains} />
		</View>
	);
}

type CardTitleProps = {
	name: string;
	pantheon: Pantheon;
};

function CardHeader({ name, pantheon }: CardTitleProps) {
	return (
		<View className="flex flex-row justify-center gap-2 mb-1">
			<TitleText>{name}</TitleText>
			<TitleText>{pantheon.icon}</TitleText>
		</View>
	);
}

type TitleTextProps = {
	children: ReactNode;
};

function TitleText({ children }: TitleTextProps) {
	return (
		<Text className="text-center text-gold-light text-xl font-cinzel">
			{children}
		</Text>
	);
}

type CardFooterProps = {
	domains: Domain[];
};

function CardFooter({ domains }: CardFooterProps) {
	return (
		<View className="flex flex-row gap-2 items-center justify-start flex-wrap mt-2">
			{domains.map((domain: Domain, index: number) => (
				<DomainTag key={index} domain={domain} />
			))}
		</View>
	);
}

type DomainTagProps = {
	domain: Domain;
};

function DomainTag({ domain }: DomainTagProps) {
	return (
		<Text className="px-3 uppercase py-1 rounded-full self-start text-center text-xs font-cinzel text-domain-sea border border-domain-sea">
			{domain.name}
		</Text>
	);
}

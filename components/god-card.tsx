import { colorMap } from "@/const/colors";
import { Domain, GodPreview, Pantheon } from "@/types/gods";
import { ReactNode } from "react";
import { Text, View } from "react-native";

type GodCardProps = {
	god: GodPreview;
};

export default function GodCard({ god }: GodCardProps) {
	return (
		<View className="bg-zinc-900 p-2 flex rounded-lg my-2 border border-amber-700">
			<CardHeader name={god.name} pantheon={god.pantheon} />
			<CardSubtitle title={god.title} icon={god.icon} />
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
	return <Text className="text-center text-amber-500 text-xl">{children}</Text>;
}

type CardSubtitleProps = {
	title: string;
	icon: string;
};

function CardSubtitle({ title, icon }: CardSubtitleProps) {
	return (
		<View className="flex flex-row gap-2 items-base justify-center">
			<Text>{icon}</Text>
			<Text className="text-amber-500 italic underline text-center mb-2">
				{title}
			</Text>
		</View>
	);
}

type CardFooterProps = {
	domains: Domain[];
};

function CardFooter({ domains }: CardFooterProps) {
	return (
		<View className="flex flex-row gap-2 items-center justify-evenly flex-wrap mt-2">
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
	const color = colorMap[domain.color];

	return (
		<Text
			style={{ backgroundColor: color }}
			className="px-2 py-1 rounded self-start text-center"
		>
			{domain.name}
		</Text>
	);
}

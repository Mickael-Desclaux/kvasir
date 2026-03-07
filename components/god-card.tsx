import { GodPreview } from "@/types/gods";
import { ReactNode } from "react";
import { Text, View } from "react-native";

type GodCardProps = {
	god: GodPreview;
};

export default function GodCard({ god }: GodCardProps) {
	return (
		<View className="bg-zinc-900 p-2 flex rounded-lg my-2 border border-amber-700">
			<CardHeader name={god.name} pantheon={god.pantheon} />
			<CardText>{god.description}</CardText>
		</View>
	);
}

type CardTextProps = {
	children: ReactNode;
};

function CardText({ children }: CardTextProps) {
	return (
		<Text className="text-center text-balance text-zinc-300">{children}</Text>
	);
}

type CardTitleProps = {
	name: string;
	pantheon: string;
};

function CardHeader({ name, pantheon }: CardTitleProps) {
	return (
		<View className="flex flex-row justify-around mb-2">
			<TitleText>{name}</TitleText>
			<TitleText>{pantheon}</TitleText>
		</View>
	);
}

type TitleTextProps = {
	children: ReactNode;
};

function TitleText({ children }: TitleTextProps) {
	return <Text className="text-center text-amber-500 text-xl">{children}</Text>;
}

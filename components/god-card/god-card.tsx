import { GodPreview, Pantheon } from "@/types/gods";
import { ReactNode } from "react";
import { Text, View } from "react-native";

type GodCardProps = {
	god: GodPreview;
};

export default function GodCard({ god }: GodCardProps) {
	return (
		<View className="bg-surface-2 p-2 flex-row items-center rounded-card my-2 border border-surface-3 border-l-domain-sovereignty">
			<Text className="text-3xl p-4 border-[0.5px] border-amber-300/50 bg-amber-500/10 rounded-2xl">
				{god.icon}
			</Text>
			<View className="flex flex-1 ms-4">
				<CardHeader name={god.name} pantheon={god.pantheon} />
				<CardFooter mainTags={god.mainTags} />
			</View>
		</View>
	);
}

type CardTitleProps = {
	name: string;
	pantheon: Pantheon;
};

function CardHeader({ name, pantheon }: CardTitleProps) {
	return (
		<View className="flex flex-row gap-2 mb-1">
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
		<Text className="text-gold-light text-xl font-cinzel">{children}</Text>
	);
}

type CardFooterProps = {
	mainTags: string[];
};

function CardFooter({ mainTags }: CardFooterProps) {
	return (
		<View className="flex flex-row gap-2 items-center justify-start flex-wrap mt-2">
			{mainTags.map((mainTag: string, index: number) => (
				<MainTag key={index} mainTag={mainTag} />
			))}
		</View>
	);
}

type MainTagProps = {
	mainTag: string;
};

function MainTag({ mainTag }: MainTagProps) {
	return (
		<Text
			className="px-3 uppercase py-1 rounded-full 
		text-center text-xs font-cinzel text-domain-sea border border-domain-sea"
		>
			{mainTag}
		</Text>
	);
}

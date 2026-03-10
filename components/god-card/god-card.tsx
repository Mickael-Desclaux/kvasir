import { DOMAIN_CLASSES } from "@/components/god-card/domain-tw-classes";
import { GodPreview, PrimaryDomain } from "@/types/gods";
import { Text, View } from "react-native";

type GodCardProps = {
	god: GodPreview;
};

export default function GodCard({ god }: GodCardProps) {
	const styles = DOMAIN_CLASSES[god.primaryDomain];

	return (
		<View
			className={`bg-surface-2 px-2 py-4 flex-row items-center rounded-card my-2 border ${styles.card}`}
		>
			<Text
				className={`text-3xl p-4 border-[0.5px] ${styles.icon} rounded-2xl`}
			>
				{god.icon}
			</Text>
			<View className="flex ms-4">
				<Text className="text-primary text-xl font-cinzel">{god.name}</Text>
				<CardFooter mainTags={god.mainTags} primaryDomain={god.primaryDomain} />
			</View>
		</View>
	);
}

type CardFooterProps = {
	mainTags: string[];
	primaryDomain: PrimaryDomain;
};

function CardFooter({ mainTags, primaryDomain }: CardFooterProps) {
	return (
		<View className="flex flex-row gap-2 items-center justify-start flex-wrap mt-2">
			{mainTags.map((mainTag: string, index: number) => (
				<MainTag key={index} mainTag={mainTag} primaryDomain={primaryDomain} />
			))}
		</View>
	);
}

type MainTagProps = {
	mainTag: string;
	primaryDomain: PrimaryDomain;
};

function MainTag({ mainTag, primaryDomain }: MainTagProps) {
	const styles = DOMAIN_CLASSES[primaryDomain];

	return (
		<Text
			className={`px-3 uppercase py-1 rounded-full 
		text-center text-xs font-cinzel border-[0.5px] ${styles.tag}`}
		>
			{mainTag}
		</Text>
	);
}

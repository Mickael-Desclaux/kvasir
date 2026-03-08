import GodCard from "@/components/god-card/god-card";
import { GREEK_GODS } from "@/hardcoded-data/greek-gods";
import { FlatList, View } from "react-native";

export default function Index() {
	return (
		<View className="flex-1 items-center justify-center bg-background">
			<FlatList
				data={GREEK_GODS}
				renderItem={({ item }) => (
					<GodCard
						god={{
							id: item.id,
							name: item.name,
							pantheon: item.pantheon,
							icon: item.icon,
							mainTags: item.mainTags,
						}}
					/>
				)}
				keyExtractor={(item) => item.id.toString()}
			/>
		</View>
	);
}

import GodCard from "@/components/god-card";
import { GREEK_GODS } from "@/hardcoded-data/greek-gods";
import { FlatList, View } from "react-native";

export default function Index() {
	return (
		<View className="flex-1 items-center justify-center bg-zinc-950">
			<FlatList
				data={GREEK_GODS}
				className="max-w-[80vw] gap-4"
				renderItem={({ item }) => (
					<GodCard
						god={{
							id: item.id,
							name: item.name,
							pantheon: item.pantheon,
							description: item.description,
						}}
					/>
				)}
				keyExtractor={(item) => item.id.toString()}
			/>
		</View>
	);
}

import GodCard from "@/components/god-card";
import { GREEK_GODS } from "@/hardcoded-data/greek-gods";
import { FlatList, Text, View } from "react-native";

export default function Index() {
	return (
		<View className="flex-1 items-center justify-center bg-white">
			<Text className="text-xl font-bold text-blue-500">
				Welcome to Nativewind!
			</Text>

			<FlatList
				data={GREEK_GODS}
				renderItem={({ item }) => (
					<GodCard
						god={{
							id: item.id,
							name: item.name,
							pantheon: item.pantheon,
							domains: item.domains,
							description: item.description,
							symbols: item.symbols,
							attributes: item.attributes,
							relations: item.relations,
							sources: item.sources,
						}}
					/>
				)}
				keyExtractor={(item) => item.id.toString()}
			/>
		</View>
	);
}

import { God } from "@/types/gods";
import { Text, View } from "react-native";

type GodCardProps = {
	god: God;
};

export default function GodCard({ god }: GodCardProps) {
	return (
		<View>
			<Text>{god.name}</Text>
		</View>
	);
}

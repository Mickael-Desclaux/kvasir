import { Cinzel_400Regular } from "@expo-google-fonts/cinzel/400Regular";
import { useFonts } from "@expo-google-fonts/cinzel/useFonts";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import "../global.css";

export default function RootLayout() {
	const [loaded, error] = useFonts({
		Cinzel_400Regular,
	});

	useEffect(() => {
		if (loaded || error) {
			SplashScreen.hideAsync();
		}
	}, [loaded, error]);

	if (!loaded && !error) {
		return null;
	}

	return <Stack />;
}

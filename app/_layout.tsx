import { useFonts } from "expo-font";
import { Stack } from "expo-router";

export default function RootLayout() {

  useFonts({
    'dm-sans': require('./../assets/fonts/DMSans-Regular.ttf'),
    'dm-sans-medium': require('./../assets/fonts/DMSans-Medium.ttf'),
    'dm-sans-semi-bold': require('./../assets/fonts/DMSans-SemiBold.ttf'),
    'dm-sans-bold': require('./../assets/fonts/DMSans-Bold.ttf')
  })

  return (
    <Stack screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}

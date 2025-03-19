import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="etapa1" options={{ headerShown: false }} />
      <Stack.Screen name="etapa2" options={{ headerShown: false }} />
      <Stack.Screen name="etapa3" options={{ headerShown: false }} />
      <Stack.Screen name="etapa4" options={{ headerShown: false }} />
      <Stack.Screen name="sucesso" options={{ headerShown: false }} />
      <Stack.Screen name="falha" options={{ headerShown: false }} />
    </Stack>
  );
}

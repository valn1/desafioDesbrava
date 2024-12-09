import { KeyboardProvider } from "@/hooks/keyboard";
import { ThemeProvider } from "@/hooks/theme";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <ThemeProvider>
      <KeyboardProvider>
        <Stack screenOptions={{ headerShown: false }} />
      </KeyboardProvider>
    </ThemeProvider>
  );
}

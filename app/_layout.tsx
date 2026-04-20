import { DarkTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

const portfolioTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: '#111316',
    card: '#0b1018',
    border: 'rgba(60, 73, 78, 0.18)',
    primary: '#00d2ff',
    text: '#f3f5f7',
    notification: '#00d2ff',
  },
};

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  return (
    <ThemeProvider value={portfolioTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
      </Stack>
      <StatusBar style="light" />
    </ThemeProvider>
  );
}

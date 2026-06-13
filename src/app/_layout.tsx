import { DarkTheme, DefaultTheme, ThemeProvider } from 'expo-router';
import { useColorScheme } from 'react-native';

import { authClient } from '@/auth/auth';
import { AnimatedSplashOverlay } from '@/components/animated-icon';
import { AuthScreen } from '@/components/auth-screen';
import AppTabs from '@/components/app-tabs';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const { data: session, isPending } = authClient.useSession();

  if (isPending) {
    return (
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <AnimatedSplashOverlay />
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      {session ? <AppTabs /> : <AuthScreen />}
    </ThemeProvider>
  );
}

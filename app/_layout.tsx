import '~/global.css';

import { DarkTheme, DefaultTheme, Theme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { ActivityIndicator, Platform } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { setAndroidNavigationBar } from '../lib/android-navigation-bar';
import { NAV_THEME } from '../lib/constants';
import { useColorScheme } from '../lib/useColorScheme';

const LIGHT_THEME: Theme = {
  ...DefaultTheme,
  colors: NAV_THEME.light,
};
const DARK_THEME: Theme = {
  ...DarkTheme,
  colors: NAV_THEME.dark,
};

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

SplashScreen.preventAutoHideAsync();

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

export default function RootLayout() {
  const hasMounted = useRef(false);
  const { colorScheme, isDarkColorScheme } = useColorScheme();
  const [isColorSchemeLoaded, setIsColorSchemeLoaded] = useState(false);

  const [loaded] = useFonts({
    Reckoner: require('../assets/fonts/Reckoner.ttf'),
    ReckonerBold: require('../assets/fonts/Reckoner_Bold.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  useIsomorphicLayoutEffect(() => {
    if (hasMounted.current) {
      return;
    }

    setAndroidNavigationBar(colorScheme);
    setIsColorSchemeLoaded(true);
    hasMounted.current = true;
  }, [loaded]);

  if (!isColorSchemeLoaded && !loaded) {
    return <ActivityIndicator size="large" color="#ff0000" style={{ marginTop: '40%' }} />;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider value={isDarkColorScheme ? DARK_THEME : LIGHT_THEME}>
        <StatusBar
          style={isDarkColorScheme ? 'light' : 'dark'}
          //backgroundColor="#000"
          translucent
          animated
        />
        <Stack>
          <Stack.Screen
            name="(tabs)"
            options={{
              headerShown: false,
              navigationBarTranslucent: false,
              navigationBarColor: 'rgba(0,0,0,1)',
            }}
          />
          <Stack.Screen
            name="modal"
            options={{
              freezeOnBlur: true,
              headerBackVisible: true,
              presentation: 'fullScreenModal',
            }}
          />
          <Stack.Screen name="+not-found" />
        </Stack>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}

const useIsomorphicLayoutEffect =
  Platform.OS === 'web' && typeof window === 'undefined' ? useEffect : useLayoutEffect;

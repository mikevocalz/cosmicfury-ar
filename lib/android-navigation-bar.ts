import * as NavigationBar from 'expo-navigation-bar';
import { Platform } from 'react-native';

import { NAV_THEME } from '../lib/constants';

export async function setAndroidNavigationBar(theme: 'light' | 'dark') {
  if (Platform.OS !== 'android') return;
  //NavigationBar.setVisibilityAsync('hidden');

  await NavigationBar.setButtonStyleAsync(theme === 'dark' ? 'light' : 'dark');
  await NavigationBar.setBackgroundColorAsync('#ff0000'); // Use your desired color
}

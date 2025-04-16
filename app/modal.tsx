import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

import { ThemeToggle } from '~/components/ThemeToggle';

export default function Modal() {
  return (
    <View className="min-h-screen min-h-screen w-full flex-1 items-center bg-emerald-600">
      <Text className="my-6">Modal</Text>
      <View className="w-full  bg-slate-500 p-3">
        <ThemeToggle />
      </View>
    </View>
  );
}

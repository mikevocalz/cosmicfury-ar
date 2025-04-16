import { Stack } from 'expo-router';
import { StyleSheet, View, Text } from 'react-native';

export default function SeasonInfo() {
  return (
    <View className="min-h-screen w-full flex-1 items-center bg-yellow-600">
      <Text>Tab Two</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
});

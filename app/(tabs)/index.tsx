import { Image } from 'expo-image';
import { Stack } from 'expo-router';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import Morpher from '../mopher';
export default function Home() {
  return (
    <ScrollView
      scrollEnabled
      scrollEventThrottle={16}
      showsVerticalScrollIndicator={false}
      contentInsetAdjustmentBehavior="automatic"
      contentContainerClassName="items-center pb-[300px]"
      className="min-h-screen w-full flex-1  bg-zinc-100 dark:bg-stone-900">
      <View className="w-full max-w-5xl items-center ">
        <Image
          style={styles.image}
          source={require('assets/images/pr_cosmic_fury_logo.png')}
          contentFit="contain"
          transition={300}
        />
      </View>
      <View className="h-[900px] w-full max-w-5xl ">
        <Text className="my-8 text-center text-2xl font-bold text-black dark:text-white">
          Disclaimer:
        </Text>
        <Text className="px-4 text-center text-xl font-normal leading-7 text-black md:leading-10 dark:text-white">
          I am creating this app strictly for educational and fan appreciation purposes, with no
          affiliation or partnership with Power Rangers, its creators, or Hasbro, which owns the
          franchise. As a lifelong fan, I’ve always admired the series’ dynamic characters,
          compelling storytelling, and its emphasis on teamwork, diversity and resilience. My goal
          is to celebrate this legacy by developing an interactive AR experience that showcases the
          characters, allowing users to explore their designs and learn about their roles,
          evolution, and impact across the series’ history as well as the last installment of the
          Power Rangers we've grown to adore. By combining visual engagement with factual
          information, I aim to foster a deeper understanding and appreciation for Power Rangers as
          a cultural phenomenon, while respecting its intellectual property and inspiring future
          generations of fans.
        </Text>
        <Text className="mx-4 my-8 text-center text-2xl font-medium text-black dark:text-white">
          - "May the Power Protect You"
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    aspectRatio: 4 / 3,
    width: '95%',
    backgroundColor: 'transparent',
  },
});

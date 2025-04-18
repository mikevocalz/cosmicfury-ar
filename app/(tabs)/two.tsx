import { Stack } from 'expo-router';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';

const mediaUrls = [
  {
    id: '1',
    url: 'R7OCFymjCzM',
    title: 'Opening Theme',
  },
  {
    id: '2',
    url: 'P_8g_BSybBI',
    title: 'Theme',
  },
  {
    id: '3',
    url: 'M8XK7sdz06Q',
    title: 'Full Theme',
  },
];
export default function SeasonInfo() {
  return (
    <ScrollView
      contentContainerClassName="items-center pb-[300px] px-4"
      className="min-h-screen w-full flex-1  bg-yellow-600">
      <Text className="my-6  text-3xl font-bold">Season Info:</Text>
      {mediaUrls.map((urls) => {
        return (
          <>
            <Text style={{ fontFamily: 'Reckoner' }} className=" mb-2 text-4xl tracking-widest">
              {urls.title}
            </Text>
            <View key={urls.id} className="my-4 aspect-video w-full overflow-hidden rounded-xl">
              <YoutubePlayer height={300} videoId={urls.url} />
            </View>
          </>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
});

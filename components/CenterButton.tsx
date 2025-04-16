import { Image } from 'expo-image';
import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

import { SkiaOrb } from './SkiaOrb';

const CenterButton = ({ onPress }: any) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', zIndex: 1000 }}>
      <Pressable onPress={onPress} style={styles.container}>
        <Image
          alt="cosmic morpher"
          source={require('assets/images/morpher.png')}
          style={[
            styles.image,
            {
              transform: [{ scaleX: 1.65 }, { scaleY: 1.2 }],
            },
          ]}
          contentFit="contain"
          transition={180}
        />
        {/* <Image
          alt="cosmic orbs"
          source={require('assets/images/orb.png')}
          style={styles.orb}
          contentFit="contain"
          transition={200}
        /> */}
        <SkiaOrb />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: -58, // Adjust based on your tab bar height
    alignSelf: 'center',
    zIndex: 1000,
  },
  orb: {
    position: 'absolute',
    bottom: 36, // Adjust based on your tab bar height
    alignSelf: 'center',
    zIndex: -1000,
    width: 76,
    height: 76,
    left: 1.5,
  },
  image: {
    //aspectRatio: 4 / 6,
    width: 80,
    height: 200,
    zIndex: 100,
  },
});

export default CenterButton;

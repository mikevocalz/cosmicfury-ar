import { Canvas, Fill, ImageShader, useImage, Circle } from '@shopify/react-native-skia';
import { useEffect, useState } from 'react';

const COLORS = ['#ff0000', '#0000FF', '#0d0d0d', '#e99626', '#006400', '#ff6600', '#867055'];

export const SkiaOrb = () => {
  const image = useImage(require('../assets/images/orb.png'));
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Cycle through colors in order
      setCurrentIndex((prev) => (prev + 1) % COLORS.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Canvas
      style={{
        position: 'absolute',
        bottom: 36, // Adjust based on your tab bar height
        alignSelf: 'center',
        zIndex: -1000,
        width: 76,
        height: 76,
        left: 1.5,
      }}>
      <Circle cx={76} cy={76} r={76}>
        <Fill color={COLORS[currentIndex]} opacity={1} blendMode="overlay" />
        <ImageShader image={image} fit="cover" rect={{ x: 0, y: 0, width: 76, height: 76 }} />
      </Circle>
    </Canvas>
  );
};

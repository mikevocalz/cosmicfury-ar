import {
  ViroARScene,
  ViroText,
  ViroTrackingStateConstants,
  ViroARSceneNavigator,
} from '@reactvision/react-viro';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

import ARScene from '~/components/scene/ArScene';

function Modal(props: any) {
  return (
    <View className="min-h-screen w-full flex-1 ">
      <ViroARSceneNavigator
        autofocus
        initialScene={{
          scene: () => <ARScene />,
        }}
        style={{ flex: 1 }}
      />
    </View>
  );
}

export default Modal;

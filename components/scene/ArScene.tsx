import {
  Viro3DObject,
  ViroAmbientLight,
  ViroARPlane,
  ViroARScene,
  ViroClickStateTypes,
  ViroQuad,
  ViroTrackingReason,
  ViroTrackingStateConstants,
} from '@reactvision/react-viro';
import { Viro3DPoint } from '@reactvision/react-viro/dist/components/Types/ViroUtils';
import React, { useState } from 'react';

interface ARSceneProps {
  onInitialized?: (state: ViroTrackingStateConstants, reason: ViroTrackingReason) => void;
}

const ARScene: React.FC<ARSceneProps> = (props) => {
  const [position, setPosition] = useState<Viro3DPoint | null>(null);
  const [text, setText] = useState<string>('Initializing AR...');
  const [isModelLoading, setIsModelLoading] = useState<boolean>(true);

  const onTrackingUpdated = (state: ViroTrackingStateConstants, reason: ViroTrackingReason) => {
    if (state === ViroTrackingStateConstants.TRACKING_NORMAL) {
      setText('Scanning for surfaces...');
    } else if (state === ViroTrackingStateConstants.TRACKING_UNAVAILABLE) {
      setText(`Tracking lost: ${reason}`);
    }
    props.onInitialized?.(state, reason);
  };

  return (
    <ViroARScene onTrackingUpdated={onTrackingUpdated}>
      <ViroAmbientLight color="white" />
      <ViroARPlane minHeight={0.5} minWidth={0.5} dragType="FixedDistanceOrigin">
        <Viro3DObject
          source={require('../../assets/models/RedRanger/red.vrx')}
          resources={[
            require('../../assets/models/RedRanger/RngF_S30_T1_red_D.png'),
            require('../../assets/models/RedRanger/RngF_S30_T1_red_N.png'),
            require('../../assets/models/RedRanger/RngF_S30_T1_red_S.png'),
            require('../../assets/models/RedRanger/RngF_S30_T1_red_hammer_D.png'),
            require('../../assets/models/RedRanger/RngF_S30_T1_red_hammer_N.png'),
            require('../../assets/models/RedRanger/RngF_S30_T1_red_hammer_S.png'),
          ]}
          position={position ?? [0, -2, -5]}
          scale={[0.5, 0.5, 0.5]}
          type="VRX"
          dragType="FixedToWorld"
          onDrag={() => {}}
          onError={(error) => console.error('Model error:', error)}
          onLoadStart={() => setIsModelLoading(true)}
          onLoadEnd={() => setIsModelLoading(false)}
        />
        <ViroQuad
          arShadowReceiver
          visible={!position}
          position={[0, -2, -5]}
          width={1}
          height={1}
          rotation={[-90, 0, 0]}
          materials="QuadMaterial"
          onClickState={(state, position) => {
            if (state === ViroClickStateTypes.CLICKED) {
              setPosition(position);
            }
          }}
        />
      </ViroARPlane>
    </ViroARScene>
  );
};

export default ARScene;

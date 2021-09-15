import {RNCamera} from 'react-native-camera';
import React from 'react';

import {CameraOptionButton} from './CameraOptionButton';

export function TurnCameraButton({type, setType}) {
  const turnCameraDirection = () => {
    setType(
      type === RNCamera.Constants.Type.back
        ? RNCamera.Constants.Type.front
        : RNCamera.Constants.Type.back,
    );
  };

  return (
    <CameraOptionButton
      image={require('./assets/turn.png')}
      onPress={turnCameraDirection}
    />
  );
}

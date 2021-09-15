import {RNCamera} from 'react-native-camera';
import React from 'react';

import {CameraOptionButton} from './CameraOptionButton';
import {useCameraPreferences} from './contexts/CameraPreferencesContext';

export function TurnCameraButton() {
  const {type, setType} = useCameraPreferences();

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

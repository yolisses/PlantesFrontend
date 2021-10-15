import React from 'react';
import {RNCamera} from 'react-native-camera';

import {CameraOptionButton} from './CameraOptionButton';
import {useCameraPreferences} from './contexts/CameraPreferencesContext';

export function FlashSelectorButton() {
  const {flash, setFlash} = useCameraPreferences();

  const {auto, on, off} = RNCamera.Constants.FlashMode;
  const changeFlash = () => {
    setFlash(flash === auto ? off : flash === off ? on : auto);
  };
  return (
    <CameraOptionButton
      image={
        flash === auto
          ? require('./assets/flash-auto.png')
          : flash === off
          ? require('./assets/flash-off.png')
          : require('./assets/flash-on.png')
      }
      onPress={changeFlash}
    />
  );
}

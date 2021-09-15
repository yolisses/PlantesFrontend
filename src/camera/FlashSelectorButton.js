import React from 'react';
import {RNCamera} from 'react-native-camera';

import {CameraOptionButton} from './CameraOptionButton';

export function FlashSelectorButton({flash, setFlash}) {
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

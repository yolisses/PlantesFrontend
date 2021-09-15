import {RNCamera} from 'react-native-camera';
import React from 'react';

import {faUndo} from '@fortawesome/free-solid-svg-icons';
import {CameraOptionButton} from './CameraOptionButton';

export function TurnCameraButton({type, setType}) {
  const turnCameraDirection = () => {
    setType(
      type === RNCamera.Constants.Type.back
        ? RNCamera.Constants.Type.front
        : RNCamera.Constants.Type.back,
    );
  };

  return <CameraOptionButton icon={faUndo} onPress={turnCameraDirection} />;
}

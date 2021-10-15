import {RNCamera} from 'react-native-camera';
import React from 'react';

import {useCameraPreferences} from './contexts/CameraPreferencesContext';
import {previewStyle} from './previewStyle';

export const CameraPreview = React.forwardRef((_, ref) => {
  const {flash, type} = useCameraPreferences();

  return (
    <RNCamera
      ref={ref}
      type={type}
      flashMode={flash}
      captureAudio={false}
      pauseAfterCapture={true}
      style={previewStyle.preview}
    />
  );
});

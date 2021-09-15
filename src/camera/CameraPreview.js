import {RNCamera} from 'react-native-camera';
import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';

import {useCameraPreferences} from './contexts/CameraPreferencesContext';

export const CameraPreview = React.forwardRef((props, ref) => {
  const {flash, type} = useCameraPreferences();

  return (
    <View style={styles.container}>
      <RNCamera
        ref={ref}
        type={type}
        flashMode={flash}
        captureAudio={false}
        style={styles.preview}
        pauseAfterCapture={true}
      />
    </View>
  );
});

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  preview: {
    position: 'absolute',
    width,
    height,
  },
});

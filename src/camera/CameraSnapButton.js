import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

export function CameraSnapButton({onPress}) {
  return (
    <TouchableOpacity
      style={styles.cameraButton}
      activeOpacity={0.5}
      onPress={onPress}>
      <View style={styles.innerCameraButton} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cameraButton: {
    borderRadius: 100,
    borderStyle: 'solid',
    borderWidth: 4,
    borderColor: 'white',
    padding: 2,
    transform: [{translateY: 48}],
  },
  innerCameraButton: {
    backgroundColor: 'white',
    borderRadius: 100,
    padding: 40,
  },
});

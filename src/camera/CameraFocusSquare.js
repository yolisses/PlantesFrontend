import React from 'react';
import {StyleSheet, View} from 'react-native';

export function CameraSquareFocus() {
  return <View style={styles.focus} />;
}

const styles = StyleSheet.create({
  focus: {
    marginTop: 'auto',
    marginBottom: 'auto',
    width: '100%',
    aspectRatio: 1,
    backgroundColor: '#0000',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#fff7',
  },
});

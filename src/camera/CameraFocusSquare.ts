import React from 'react';
import {StyleSheet, View} from 'react-native';
import {width} from 'utils/width';

export function CameraSquareFocus() {
  return <View style={styles.focus} />;
}

const styles = StyleSheet.create({
  focus: {
    width,
    height: width,
    borderWidth: 1,
    marginTop: 'auto',
    borderColor: '#fff7',
    borderStyle: 'solid',
    marginBottom: 'auto',
    backgroundColor: '#0000',
  },
});

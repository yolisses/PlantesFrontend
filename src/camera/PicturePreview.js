import FastImage from 'react-native-fast-image';
import React from 'react';
import {StyleSheet} from 'react-native';
import {previewStyle} from './previewStyle';

export function PicturePreview({uri}) {
  return (
    <FastImage
      source={{uri, priority: FastImage.priority.high}}
      style={[previewStyle.preview, styles.image]}
    />
  );
}

const styles = StyleSheet.create({
  image: {
    backgroundColor: '#0000',
  },
});

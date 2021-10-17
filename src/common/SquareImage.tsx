import React from 'react';
import {StyleProp, StyleSheet} from 'react-native';
import FastImage, {ImageStyle} from 'react-native-fast-image';
import {width} from 'utils/width';

interface SquareImageProps {
  uri: string;
  style?: StyleProp<ImageStyle>;
  fraction?: number;
}

export function SquareImage({uri, style, fraction = 1}: SquareImageProps) {
  const size = width / fraction - (fraction - 1) / fraction;
  return (
    <FastImage
      source={{uri}}
      style={[
        styles.image,
        {
          width: size,
          height: size,
        },
        style,
      ]}
    />
  );
}

const styles = StyleSheet.create({
  image: {
    marginRight: 1,
    marginBottom: 1,
    backgroundColor: '#e5e5e5',
  },
});

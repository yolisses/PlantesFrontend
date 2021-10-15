import React from 'react';
import {StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';
import {width} from 'utils/width';

export function SquareImage({uri, style, fraction = 1}) {
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

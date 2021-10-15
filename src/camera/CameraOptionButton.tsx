import React from 'react';
import {StyleSheet} from 'react-native';
import {Image, TouchableOpacity} from 'react-native';

export function CameraOptionButton({image, ...rest}) {
  return (
    <TouchableOpacity {...rest} activeOpacity={0.7}>
      <Image source={image} color="white" style={styles.image} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  image: {
    margin: 20,
    height: 20,
    aspectRatio: 1,
  },
});

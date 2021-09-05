import React from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import FastImage from 'react-native-fast-image';

const {width, height} = Dimensions.get('window');

export function SquareImage({
  uri,
  offset = 0,
  fraction = 1,
  heightFraction = 1,
  style,
  onPress,
}) {
  const size = width / fraction - offset / 2;

  const sizeStyle = {
    width: size,
    height: size / heightFraction,
    marginBottom: offset,
    marginRight: offset,
  };
  const transformStyle = {
    transform: [{scale: 1 / fraction}],
  };

  return uri ? (
    <View style={[styles.image, sizeStyle, style]} onPress={onPress}>
      <FastImage
        source={{
          uri,
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.cover}
        style={[styles.previewImage, transformStyle]}
      />
    </View>
  ) : (
    <View style={[styles.image, sizeStyle]} />
  );
}

const styles = StyleSheet.create({
  image: {
    backgroundColor: '#dbdbdb',
    overflow: 'hidden',
    width,
    height: width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  previewImage: {
    position: 'relative',
    width,
    height,
  },
});

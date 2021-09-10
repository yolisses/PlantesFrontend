import React from 'react';
import FastImage from 'react-native-fast-image';

import {Pressable, StyleSheet, Text} from 'react-native';

import {width} from 'utils/width';

const numberOfCollums = 3;

export function SelectableImage({value, onChange, uri}) {
  return (
    <Pressable
      onPress={() => {
        onChange(!value);
      }}>
      <Text>{'' + value}</Text>
      <FastImage style={style.image} source={{uri}} />
    </Pressable>
  );
}

const style = StyleSheet.create({
  image: {
    width: width / numberOfCollums - 1 / numberOfCollums,
    aspectRatio: 1,
    marginRight: 1,
    marginBottom: 1,
  },
});

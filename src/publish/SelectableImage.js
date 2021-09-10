import React from 'react';
import FastImage from 'react-native-fast-image';

import {Pressable, StyleSheet, Text, View} from 'react-native';

import {width} from 'utils/width';
import {SelectableImageNumber} from './SelectableImageNumber';

const numberOfCollums = 3;

export function SelectableImage({value, onChange, uri}) {
  return (
    <Pressable
      onPress={() => {
        onChange(!value);
      }}>
      <FastImage
        style={[styles.image, value && styles.selected]}
        source={{uri}}
      />
      {value ? (
        <View style={styles.numberWrapper}>
          <SelectableImageNumber number={999} />
        </View>
      ) : null}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  image: {
    width: width / numberOfCollums - 1 / numberOfCollums,
    aspectRatio: 1,
    marginRight: 1,
    marginBottom: 1,
  },
  selected: {
    borderWidth: 3,
    borderColor: '#0a0',
    borderStyle: 'solid',
  },
  numberWrapper: {
    top: 4,
    right: 4,
    zIndex: 100,
    position: 'absolute',
  },
});

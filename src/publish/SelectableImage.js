import React from 'react';
import FastImage from 'react-native-fast-image';

import {Pressable, StyleSheet, View} from 'react-native';

import {width} from 'utils/width';
import {SelectableImageNumber} from './SelectableImageNumber';
import {RerenderTester} from 'dev/rerenderTester';

const numberOfCollums = 3;

export function SelectableImage({uri, active, images, dispatch}) {
  return (
    <Pressable
      onPress={function () {
        if (!active) {
          dispatch({id: ['images', uri], value: true});
        } else {
          dispatch({id: ['images', uri], value: false});
        }
      }}>
      <FastImage
        style={[styles.image, active && styles.selected]}
        source={{uri}}
      />
      {active && (
        <View style={styles.numberWrapper}>
          {/* <SelectableImageNumber number={10} /> */}
        </View>
      )}
      <RerenderTester />
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

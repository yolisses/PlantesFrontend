import React, {useMemo} from 'react';
import FastImage from 'react-native-fast-image';

import {Pressable, StyleSheet, View} from 'react-native';

import {width} from 'utils/width';
import {SelectableImageNumber} from './SelectableImageNumber';

const numberOfCollums = 3;

export function SelectableImage({uri, index, dispatch}) {
  return useMemo(
    () => (
      <Pressable
        onPress={function () {
          if (!index) {
            dispatch({id: ['images', uri], value: true});
          } else {
            dispatch({id: ['images', uri], type: 'delete'});
          }
        }}>
        <FastImage
          style={[styles.image, index && styles.selected]}
          source={{uri}}
        />
        {!!index && (
          <View style={styles.numberWrapper}>
            <SelectableImageNumber number={index + 1} />
          </View>
        )}
      </Pressable>
    ),
    [index],
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

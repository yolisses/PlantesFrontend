import React, {useMemo} from 'react';
import FastImage from 'react-native-fast-image';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

import {SelectableImageNumber} from '../publish/SelectableImageNumber';

import {width} from 'utils/width';

const numberOfCollums = 3;

export function SelectableImage({uri, change, index}) {
  function handlePress() {
    change(() => uri);
  }

  return useMemo(
    () => (
      <TouchableOpacity onPress={handlePress} activeOpacity={0.9}>
        <View style={styles.wrapper}>
          <FastImage
            style={[styles.image, index && styles.selected]}
            source={{uri}}
          />
          {!!index && (
            <View style={styles.numberWrapper}>
              <SelectableImageNumber number={index} />
            </View>
          )}
        </View>
      </TouchableOpacity>
    ),
    [index],
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginRight: 1,
    marginBottom: 1,
  },
  image: {
    width: width / numberOfCollums - 1 / numberOfCollums,
    aspectRatio: 1,
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

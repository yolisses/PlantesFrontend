import React from 'react';
import FastImage from 'react-native-fast-image';

import {Pressable, StyleSheet, View} from 'react-native';

import {width} from 'utils/width';
import {SelectableImageNumber} from './SelectableImageNumber';
import {usePublish} from './contexts/PublishContext';

const numberOfCollums = 3;

export function SelectableImage({uri}) {
  const {images, pushImage, removeImage} = usePublish();

  const index = images.indexOf(uri);
  const selected = index !== -1;

  function onPress() {
    if (!selected) {
      pushImage(uri);
    } else {
      removeImage(uri);
    }
  }

  return (
    <Pressable onPress={onPress}>
      <FastImage
        style={[styles.image, selected && styles.selected]}
        source={{uri}}
      />
      {selected && (
        <View style={styles.numberWrapper}>
          <SelectableImageNumber number={index + 1} />
        </View>
      )}
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

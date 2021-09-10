import React from 'react';
import FastImage from 'react-native-fast-image';

import {Pressable, StyleSheet, View} from 'react-native';

import {width} from 'utils/width';
import {SelectableImageNumber} from './SelectableImageNumber';
import {useField} from 'react-final-form';

const numberOfCollums = 3;

export function SelectableImage({value, onChange, uri}) {
  const {input} = useField('images');
  const images = Object.keys(input.value)?.map(image =>
    image.replace(':&#%', '.'),
  );

  return (
    <Pressable
      onPress={() => {
        onChange(value ? undefined : true);
      }}>
      <FastImage
        style={[styles.image, value && styles.selected]}
        source={{uri}}
      />
      {value ? (
        <View style={styles.numberWrapper}>
          <SelectableImageNumber number={images.indexOf(uri) + 1} />
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

import React from 'react';
import {Field} from 'react-final-form';
import FastImage from 'react-native-fast-image';

import {Pressable, StyleSheet} from 'react-native';

import {width} from 'utils/width';

const numberOfCollums = 3;

export function SelectableImage({value, name, uri}) {
  return (
    <Field
      name={name + '.' + uri}
      subscription={name + '.' + uri}
      render={({input}) => (
        <Pressable>
          <FastImage style={style.image} source={{uri}} />
        </Pressable>
      )}
    />
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

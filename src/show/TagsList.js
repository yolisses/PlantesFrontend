import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Tag} from './Tag';

export function TagsList() {
  return (
    <View style={sytles.container}>
      {['de sombra', 'frutífera', 'medicinal', 'ornamental'].map(item => (
        <Tag key={item} text={item} />
      ))}
    </View>
  );
}

const sytles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 3,
  },
});

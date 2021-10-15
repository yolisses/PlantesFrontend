import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Tag} from './Tag';

export function TagsList({tags}) {
  return (
    <View style={sytles.container}>
      {tags.map(tag => (
        <Tag key={tag} text={tag} />
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

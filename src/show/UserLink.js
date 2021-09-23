import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';

export function UserLink(userId) {
  return (
    <View style={styles.container}>
      <FastImage style={styles.image} />
      <Text style={styles.name}>Ulisses</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
    alignItems: 'center',
    flexDirection: 'row',
  },
  image: {
    width: 48,
    aspectRatio: 1,
    marginRight: 10,
    borderRadius: 100,
    backgroundColor: '#ddd',
  },
  name: {
    fontSize: 18,
  },
});

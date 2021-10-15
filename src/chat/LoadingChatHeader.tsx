import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

export function LoadingChatHeader() {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.6}>
      <View style={styles.image} />
      <View style={styles.name} />
    </TouchableOpacity>
  );
}

const size = 38;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    paddingRight: 20,
  },
  image: {
    borderRadius: 100,
    backgroundColor: '#eee',
    width: size,
    height: size,
  },
  name: {
    paddingTop: 30,
    paddingRight: 120,
    backgroundColor: '#eee',
    borderRadius: 10,
    marginLeft: 5,
  },
});

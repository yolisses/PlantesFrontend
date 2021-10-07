import React from 'react';
import {StyleSheet, Text} from 'react-native';

export function Secondary({text}) {
  return <Text style={styles.text}>{text}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    color: 'gray',
  },
});

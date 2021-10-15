import React from 'react';
import {StyleSheet, Text} from 'react-native';

export function Description({text}) {
  return <Text style={styles.text}>{text}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    padding: 10,
  },
});

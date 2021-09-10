import React from 'react';
import {StyleSheet, Text} from 'react-native';

export function ErrorMessage({text}) {
  return <Text style={styles.text}>{text}</Text>;
}

const styles = StyleSheet.create({
  text: {
    padding: 10,
    fontSize: 18,
    color: '#900',
    paddingTop: 5,
  },
});

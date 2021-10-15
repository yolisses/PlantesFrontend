import React from 'react';
import {StyleSheet, Text} from 'react-native';

export function Label({text, style}) {
  return <Text style={[styles.text, style]}>{text}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    marginLeft: 10,
    paddingHorizontal: 3,
    color: '#444',
  },
});

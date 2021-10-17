import React from 'react';
import {StyleSheet, Text, TextStyle} from 'react-native';

interface LabelProps {
  text: string;
  style?: TextStyle;
}

export function Label({text, style}: LabelProps) {
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

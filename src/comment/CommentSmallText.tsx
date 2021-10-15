import React from 'react';
import {StyleSheet, Text} from 'react-native';

export function CommentSmallText({text}) {
  return <Text style={styles.text}>{text}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    color: '#888',
    paddingHorizontal: 6,
    paddingBottom: 10,
  },
});

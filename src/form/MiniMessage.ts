import React from 'react';
import {StyleSheet, Text} from 'react-native';

export function MiniMessage({text, isError}) {
  return (
    <Text style={[styles.text, {color: isError ? '#900' : 'gray'}]}>
      {text}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    padding: 10,
    fontSize: 18,
    paddingTop: 5,
  },
});

import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

export function EmphasisButton({text, ...rest}) {
  return (
    <TouchableOpacity style={styles.button} activeOpacity={0.8} {...rest}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    color: '#fff',
  },
  button: {
    padding: 15,
    borderRadius: 10,
    elevation: 3,
    alignItems: 'center',
    backgroundColor: '#080',
  },
});

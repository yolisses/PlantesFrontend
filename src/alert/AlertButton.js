import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

export function AlertButton({text, destructive, ...rest}) {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.5} {...rest}>
      <Text style={[styles.text, destructive && styles.destructiveText]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
  },
  destructiveText: {
    color: '#d00',
  },
});

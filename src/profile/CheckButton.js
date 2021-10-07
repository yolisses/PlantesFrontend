import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

export function CheckButton({onPress}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.5}
      style={styles.button}>
      <Text style={styles.text}>Conferir</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    color: 'green',
  },
  button: {
    padding: 8,
    borderWidth: 2,
    borderColor: 'green',
    marginVertical: 6,
    borderRadius: 10,
  },
});

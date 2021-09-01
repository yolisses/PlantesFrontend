import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

export function ShowMoreButton({active, onPress}) {
  return (
    <TouchableOpacity
      activeOpacity={0}
      accessibilityRole="button"
      onPress={onPress}>
      <Text style={styles.text}>
        {active ? 'Mostrar menos' : 'Mostrar mais'}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    color: 'gray',
    padding: 5,
    marginRight: 10,
  },
});

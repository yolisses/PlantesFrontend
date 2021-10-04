import React from 'react';
import {StyleSheet} from 'react-native';
import {Text, TouchableOpacity} from 'react-native';

export function CleanFiltersButton({text, onPress}) {
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
  },
});

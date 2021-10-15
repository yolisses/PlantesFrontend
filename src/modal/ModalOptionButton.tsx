import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {TouchableOpacity} from 'react-native';

export function ModalOptionButton({text, onSelect}) {
  function onPress() {
    onSelect(text);
  }

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.wrapper}
      onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 12,
    paddingRight: 30,
    alignSelf: 'flex-start',
  },
  text: {
    fontSize: 18,
  },
});

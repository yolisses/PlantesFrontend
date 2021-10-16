import React from 'react';
import {GestureResponderEvent, StyleSheet, View} from 'react-native';
import {Text, TouchableOpacity} from 'react-native';

interface ApplyButton {
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  text?: string;
}

export function ApplyButton({onPress, text}: ApplyButton) {
  return (
    <View style={styles.facade}>
      <TouchableOpacity
        style={styles.button}
        onPress={onPress}
        activeOpacity={0.9}>
        <Text style={styles.text}>{text || 'Aplicar'}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    margin: 5,
    borderRadius: 10,
    padding: 12,
    backgroundColor: 'green',
    bottom: 0,
  },
  text: {
    textAlign: 'center',
    fontSize: 18,
    color: '#fff',
  },
  facade: {
    backgroundColor: '#fff',
  },
});

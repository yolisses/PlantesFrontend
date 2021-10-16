import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {alert} from './alert';

export function AlertButton({text, destructive, onPress, ...rest}) {
  const onPressAndClose = () => {
    if (onPress) {
      onPress();
    }
    alert.closeAlert();
  };

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.5}
      onPress={onPressAndClose}
      {...rest}>
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

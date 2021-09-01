import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Label} from './Label';

export function Fieldset({
  label,
  style,
  styleLabel,
  children,
  disableBorder,
  ...rest
}) {
  return (
    <View style={styles.container}>
      <Label text={label} style={[styles.label, styleLabel]} />
      <View
        style={[styles.input, !disableBorder && styles.border, style]}
        {...rest}>
        {children}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
  },
  input: {
    width: '100%',
    borderRadius: 10,
    padding: 10,
    fontSize: 18,
  },
  border: {
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: '#aaa',
  },
  label: {
    backgroundColor: '#eee',
    transform: [{translateY: 10}],
    zIndex: 10,
  },
});

import React from 'react';
import {StyleSheet, View} from 'react-native';
import {MiniMessage} from './MiniMessage';
import {Label} from './Label';

export function Fieldset({
  error,
  label,
  style,
  children,
  styleLabel,
  description,
  disableBorder,
  ...rest
}) {
  return (
    <>
      <View style={styles.container}>
        <Label text={label} style={[styles.label, styleLabel]} />
        <View
          style={[styles.input, !disableBorder && styles.border, style]}
          {...rest}>
          {children}
        </View>
        {error ? (
          <MiniMessage isError text={error} />
        ) : (
          !!description && <MiniMessage text={description} />
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  input: {
    width: '100%',
    borderRadius: 10,
    fontSize: 18,
  },
  border: {
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: '#bbb',
  },
});

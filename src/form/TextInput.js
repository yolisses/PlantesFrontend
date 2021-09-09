import React, {useEffect, useRef} from 'react';
import react_native, {Keyboard, StyleSheet, Text, View} from 'react-native';
import {Fieldset} from './Fieldset';

export function TextInput({
  error,
  label,
  style,
  value,
  active,
  optional,
  input,
  leftChild,
  ...rest
}) {
  const inputRef = useRef();
  const keyboardDidHide = () => {
    inputRef?.current?.blur();
  };
  useEffect(() => {
    Keyboard.addListener('keyboardDidHide', keyboardDidHide);
  }, []);

  return (
    <View>
      <Fieldset
        label={label}
        style={[styles.fieldset, active && styles.focused]}
        styleLabel={[styles.label, active && styles.focusedLabel]}>
        <View style={styles.horizontalWrapper}>
          {leftChild}
          {optional && !active && !value && (
            <Text style={styles.optionalText}>Opcional </Text>
          )}
          <react_native.TextInput
            style={[styles.input, style]}
            {...rest}
            value={value}
            ref={inputRef}
            {...input}
          />
        </View>
      </Fieldset>
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    width: '100%',
    fontSize: 18,
  },
  fieldset: {
    marginTop: 20,
  },
  focused: {borderColor: '#000'},
  focusedLabel: {color: '#000'},
  horizontalWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  optionalText: {
    position: 'absolute',
    left: 12,
    top: 0,
    bottom: 0,
    textAlign: 'center',
    fontSize: 15,
    paddingTop: 3,
    color: 'gray',
    alignSelf: 'flex-start',
  },
  label: {
    position: 'absolute',
    zIndex: 10,
    transform: [{translateY: 0}],
    backgroundColor: '#eee',
  },
  error: {
    color: '#900',
    fontSize: 18,
    marginHorizontal: 20,
    marginBottom: 20,
  },
});

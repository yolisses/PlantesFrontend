import React, {useEffect, useRef, useState} from 'react';
import react_native, {Keyboard, StyleSheet, Text, View} from 'react-native';

import {Fieldset} from './Fieldset';

export function TextInput({
  label,
  value,
  error,
  style,
  optional,
  multiline,
  leftChild,
  rightChild,
  ...rest
}) {
  const [focused, setFocused] = useState(false);
  const inputRef = useRef();

  useEffect(() => {
    Keyboard.addListener('keyboardDidHide', () => {
      inputRef?.current?.blur();
    });
  }, []);

  function onFocus() {
    setFocused(true);
  }

  function onBlur(e) {
    setFocused(false);
  }

  const isValueShowable = value !== null && value !== undefined && value !== '';

  return (
    <View>
      <Fieldset
        label={label}
        error={error}
        style={[styles.fieldset, focused && styles.focused]}
        styleLabel={[styles.label, focused && styles.focusedLabel]}>
        <View style={styles.horizontalWrapper}>
          {leftChild}
          {optional && !focused && !isValueShowable && (
            <Text style={styles.optionalText}>Opcional </Text>
          )}
          <react_native.TextInput
            {...rest}
            ref={inputRef}
            onBlur={onBlur}
            onFocus={onFocus}
            multiline={multiline}
            value={isValueShowable ? value : ''}
            style={[styles.input, multiline && styles.multiline, style]}
          />
          {rightChild}
        </View>
      </Fieldset>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    flex: 1,
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
    backgroundColor: 'white',
  },
  multiline: {
    paddingBottom: 35,
  },
});

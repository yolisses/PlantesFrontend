import React, {useEffect, useMemo, useRef, useState} from 'react';
import react_native, {Keyboard, StyleSheet, Text, View} from 'react-native';

import {Fieldset} from './Fieldset';

export function TextInput({
  id,
  data,
  error,
  input,
  label,
  style,
  optional,
  multiline,
  leftChild,
  description,
  customOnBlur,
  onChangeValue,
  customOnChangeText,
  customGetInitialValue,
  ...rest
}) {
  function getInitialValue() {
    if (customGetInitialValue) {
      return customGetInitialValue();
    } else {
      return data[id];
    }
  }

  const [value, setValue] = useState(getInitialValue());
  const [focused, setFocused] = useState(false);
  const inputRef = useRef();
  const keyboardDidHide = () => {
    inputRef?.current?.blur();
  };
  useEffect(() => {
    Keyboard.addListener('keyboardDidHide', keyboardDidHide);
  }, []);

  function onChangeText(text) {
    if (customOnChangeText) {
      customOnChangeText(text, setValue);
    } else {
      setValue(text);
      data[id] = text;
      if (onChangeValue) {
        onChangeValue(text);
      }
    }
  }

  function onFocus() {
    setFocused(true);
  }

  function onBlur(e) {
    setFocused(false);
    if (customOnBlur) {
      customOnBlur(e, value, setValue);
    }
  }

  const isValueShowable = value !== null && value !== undefined && value !== '';

  return (
    <View>
      <Fieldset
        error={error}
        label={label}
        description={description}
        style={[styles.fieldset, focused && styles.focused]}
        styleLabel={[styles.label, focused && styles.focusedLabel]}>
        <View style={styles.horizontalWrapper}>
          {leftChild}
          {optional && !focused && !isValueShowable && (
            <Text style={styles.optionalText}>Opcional </Text>
          )}
          <react_native.TextInput
            {...rest}
            {...input}
            value={isValueShowable ? '' + value : ''}
            ref={inputRef}
            onBlur={onBlur}
            onFocus={onFocus}
            multiline={multiline}
            onChangeText={onChangeText}
            style={[styles.input, multiline && styles.multiline, style]}
            // onChangeText={text => setValue(text)}
          />
        </View>
      </Fieldset>
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
    backgroundColor: 'white',
  },
  multiline: {
    paddingBottom: 35,
  },
});

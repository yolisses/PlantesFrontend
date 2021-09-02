import React, {useEffect, useRef, useState} from 'react';
import react_native, {
  Keyboard,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Fieldset} from './Fieldset';

export function TextInput({
  label,
  style,
  leftChild,
  onFocus,
  onBlur,
  optional,
  value,
  ...rest
}) {
  const [focused, setFocused] = useState(false);
  const inputRef = useRef();

  const press = () => {
    if (rest.editable !== false) {
      inputRef?.current?.focus();
    }
  };
  const keyboardDidHide = () => {
    inputRef?.current?.blur();
  };
  useEffect(() => {
    Keyboard.addListener('keyboardDidHide', keyboardDidHide);
  }, []);

  return (
    <Pressable onPress={press}>
      <Fieldset
        label={label}
        style={[styles.fieldset, focused && styles.focused]}
        styleLabel={[styles.label, focused && styles.focusedLabel]}>
        <View style={styles.horizontalWrapper}>
          {leftChild}
          {optional &&
            !focused &&
            (value === undefined || value === null || value === '') && (
              <Text style={styles.optionalText}>Opcional </Text>
            )}
          <react_native.TextInput
            style={[styles.input, style]}
            {...rest}
            value={value !== null ? '' + value : ''}
            ref={inputRef}
            onFocus={e => {
              setFocused(true);
              if (onFocus) {
                onFocus(e);
              }
            }}
            onBlur={e => {
              setFocused(false);
              if (onBlur) {
                onBlur(e);
              }
            }}
          />
        </View>
      </Fieldset>
    </Pressable>
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
    transform: [{translateY: -2}],
    backgroundColor: '#eee',
  },
});

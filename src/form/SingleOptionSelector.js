import React from 'react';
import {StyleSheet} from 'react-native';
import {Fieldset} from './Fieldset';
import {SelectorWithImage} from './SelectorWithImage';

export function SingleOptionSelector({
  label,
  value,
  style,
  options,
  onChange,
  buttonStyle,
}) {
  return (
    <Fieldset label={label} style={[styles.fieldset, style]} disableBorder>
      {options.map(option => (
        <SelectorWithImage
          key={option.key}
          style={buttonStyle}
          label={option.label}
          image={option.image}
          active={option.key === value}
          onPress={() => {
            if (onChange) {
              onChange(option.key);
            }
          }}
        />
      ))}
    </Fieldset>
  );
}

const styles = StyleSheet.create({
  fieldset: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 0,
  },
});

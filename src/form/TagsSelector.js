import React from 'react';
import {StyleSheet} from 'react-native';
import {Fieldset} from './Fieldset';
import {ToggleButton} from './ToggleButton';

export function TagsSelector({options, label, style, buttonStyle}) {
  return (
    <Fieldset label={label} style={[styles.fieldset, style]} disableBorder>
      {options.map(option => (
        <ToggleButton
          key={option.key}
          label={option.label}
          style={buttonStyle}
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

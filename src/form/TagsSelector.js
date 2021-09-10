import React from 'react';
import {Field} from 'react-final-form';
import {StyleSheet} from 'react-native';
import {Fieldset} from './Fieldset';
import {ToggleButton} from './ToggleButton';

export function TagsSelector({
  name,
  label,
  style,
  options,
  buttonStyle,
  ...rest
}) {
  return (
    <Fieldset label={label} style={[styles.fieldset, style]} disableBorder>
      {options.map(option => (
        <Field
          name={name + '.' + option.key}
          render={({input}) => (
            <ToggleButton
              {...input}
              key={option.key}
              style={buttonStyle}
              label={option.label}
            />
          )}
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

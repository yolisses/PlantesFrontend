import {useObserver} from 'mobx-react-lite';
import React from 'react';
import {StyleSheet} from 'react-native';
import {Fieldset} from './Fieldset';
import {ToggleButton} from './ToggleButton';

export function TagsSelector({
  label,
  style,
  value,
  labels,
  options,
  setFieldValue,
  showIcon,
  buttonStyle,
}) {
  return (
    <Fieldset label={label} style={[styles.fieldset, style]} disableBorder>
      {options.map(option => (
        <ToggleButton
          key={option}
          showIcon={showIcon}
          style={buttonStyle}
          value={value[option]}
          label={labels ? labels[option] : option}
          onValueChange={value => setFieldValue('option', value)}
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

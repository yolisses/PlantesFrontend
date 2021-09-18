import React from 'react';
import {StyleSheet} from 'react-native';
import {Fieldset} from './Fieldset';
import {ToggleButton} from './ToggleButton';

export function TagsSelector({
  id,
  data,
  label,
  labels,
  value,
  style,
  options,
  buttonStyle,
  onValueChange,
}) {
  if (!data[id]) {
    data[id] = {};
  }

  function onChangeCallback() {
    if (onValueChange) {
      onValueChange(data[id]);
    }
  }

  return (
    <Fieldset label={label} style={[styles.fieldset, style]} disableBorder>
      {options.map(option => (
        <ToggleButton
          id={option}
          data={data[id]}
          key={option}
          label={labels ? labels[option] : option}
          style={buttonStyle}
          onChangeCallback={onChangeCallback}
          active={!!value && value[option]}
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

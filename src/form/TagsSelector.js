import React, {useMemo} from 'react';
import {StyleSheet} from 'react-native';
import {Fieldset} from './Fieldset';
import {ToggleButton} from './ToggleButton';

export function TagsSelector({
  id, //Array
  data,
  label,
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
          id={option.key}
          data={data[id]}
          option={option}
          key={option.key}
          style={buttonStyle}
          onChangeCallback={onChangeCallback}
          active={!!value && value[option.key]}
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

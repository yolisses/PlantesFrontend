import React, {useMemo} from 'react';
import {StyleSheet} from 'react-native';
import {Fieldset} from './Fieldset';
import {ToggleButton} from './ToggleButton';

export function TagsSelector({
  id,
  label,
  value,
  style,
  options,
  buttonStyle,
  dispatch,
}) {
  return (
    <Fieldset label={label} style={[styles.fieldset, style]} disableBorder>
      {options.map(option => (
        <ToggleButton
          option={option}
          key={option.key}
          style={buttonStyle}
          dispatch={dispatch}
          active={!!value && value[option.key]}
          id={[id, option.key]}
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

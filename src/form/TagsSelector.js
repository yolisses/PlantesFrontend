import React, {useMemo} from 'react';
import {StyleSheet} from 'react-native';
import {Fieldset} from './Fieldset';
import {ToggleButton} from './ToggleButton';

export function TagsSelector({
  id, //Array
  label,
  value,
  style,
  options,
  buttonStyle,
  dispatch,
}) {
  const getComposeId = key => {
    if (id === undefined || id === null) {
      return key;
    } else {
      return [id, key];
    }
  };

  return (
    <Fieldset label={label} style={[styles.fieldset, style]} disableBorder>
      {options.map(option => (
        <ToggleButton
          id={getComposeId(option.key)}
          option={option}
          key={option.key}
          style={buttonStyle}
          dispatch={dispatch}
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

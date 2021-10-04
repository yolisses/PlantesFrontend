import {useObserver} from 'mobx-react-lite';
import React from 'react';
import {StyleSheet} from 'react-native';
import {Fieldset} from './Fieldset';
import {ToggleButton} from './ToggleButton';

export function TagsSelector({
  label,
  style,
  value = {},
  labels,
  options,
  showIcon,
  onChange,
  buttonStyle,
  ...rest
}) {
  return useObserver(() => (
    <Fieldset
      label={label}
      style={[styles.fieldset, style]}
      disableBorder
      {...rest}>
      {options.map(option => (
        <ToggleButton
          key={option}
          option={option}
          onChange={onChange}
          showIcon={showIcon}
          value={value}
          label={labels ? labels[option] : option}
          style={buttonStyle}
        />
      ))}
    </Fieldset>
  ));
}

const styles = StyleSheet.create({
  fieldset: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 0,
  },
});

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
  function change(option, newValue) {
    const copy = {...value};
    copy[option] = newValue;
    onChange(copy);
  }

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
          change={change}
          onChange={onChange}
          showIcon={showIcon}
          style={buttonStyle}
          value={value[option]}
          label={labels ? labels[option] : option}
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

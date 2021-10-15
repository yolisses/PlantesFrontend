import {useObserver} from 'mobx-react-lite';
import React from 'react';
import {StyleSheet} from 'react-native';
import {Fieldset} from './Fieldset';
import {ToggleButton} from './ToggleButton';

export function TagsSelector({
  label,
  style,
  labels,
  options,
  showIcon,
  onChange,
  value = {},
  buttonStyle,
  ...rest
}) {
  function change(getOption) {
    onChange(old => {
      const option = getOption();
      const copy = {...old};
      copy[option] = !copy[option];
      return copy;
    });
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

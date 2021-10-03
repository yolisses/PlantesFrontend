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
  buttonStyle,
}) {
  return useObserver(() => (
    <Fieldset label={label} style={[styles.fieldset, style]} disableBorder>
      {options.map(option => (
        <ToggleButton
          key={option}
          showIcon={showIcon}
          style={buttonStyle}
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

import {useObserver} from 'mobx-react-lite';
import React from 'react';
import {StyleSheet} from 'react-native';
import {Fieldset} from './Fieldset';
import {ToggleButton} from './ToggleButton';

export function TagsSelector({
  id,
  data,
  label,
  style,
  labels,
  options,
  showIcon,
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

  return useObserver(() => (
    <Fieldset label={label} style={[styles.fieldset, style]} disableBorder>
      {options.map(option => (
        <ToggleButton
          id={option}
          data={data[id]}
          key={option}
          showIcon={showIcon}
          label={labels ? labels[option] : option}
          style={buttonStyle}
          onChangeCallback={onChangeCallback}
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

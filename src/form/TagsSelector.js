import {useObserver} from 'mobx-react-lite';
import React from 'react';
import {StyleSheet} from 'react-native';
import {Fieldset} from './Fieldset';
import {ToggleButton} from './ToggleButton';

export function TagsSelector({
  id,
  label,
  style,
  value,
  labels,
  options,
  showIcon,
  buttonStyle,
  setFieldValue,
}) {
  // function select(option, part) {
  //   setFieldValue(id + '.' + option, part);
  // }

  return useObserver(() => (
    <Fieldset label={label} style={[styles.fieldset, style]} disableBorder>
      {options.map(option => (
        <ToggleButton
          id={id}
          key={option}
          setFieldValue={setFieldValue}
          option={option}
          // select={select}
          showIcon={showIcon}
          style={buttonStyle}
          value={value}
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

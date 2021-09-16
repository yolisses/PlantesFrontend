import React, {useMemo} from 'react';
import {StyleSheet} from 'react-native';
import {Fieldset} from './Fieldset';
import {SelectorWithImage} from './SelectorWithImage';

export function SingleOptionSelector({
  id,
  label,
  value,
  style,
  options,
  dispatch,
  buttonStyle,
}) {
  return useMemo(
    () => (
      <Fieldset label={label} style={[styles.fieldset, style]} disableBorder>
        {options.map(option => (
          <SelectorWithImage
            key={option.key}
            style={buttonStyle}
            label={option.label}
            image={option.image}
            active={option.key === value}
            onPress={() => dispatch({id, value: option.key})}
          />
        ))}
      </Fieldset>
    ),
    [value],
  );
}

const styles = StyleSheet.create({
  fieldset: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 0,
  },
});

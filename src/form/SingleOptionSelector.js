import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {Fieldset} from './Fieldset';
import {SelectorWithImage} from './SelectorWithImage';

export function SingleOptionSelector({
  id,
  data,
  label,
  style,
  options,
  buttonStyle,
}) {
  const [value, setValue] = useState();

  return (
    <Fieldset label={label} style={[styles.fieldset, style]} disableBorder>
      {options.map(option => (
        <SelectorWithImage
          id={option.key}
          selectorId={id}
          data={data}
          key={option.key}
          style={buttonStyle}
          label={option.label}
          image={option.image}
          active={option.key === value}
          setValue={setValue}
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

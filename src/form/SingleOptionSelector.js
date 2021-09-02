import React from 'react';
import {StyleSheet} from 'react-native';
import {Fieldset} from './Fieldset';
import {SelectorWithImage} from './SelectorWithImage';

export function SingleOptionSelector({dataItem, style, buttonStyle}) {
  return (
    <Fieldset
      label={dataItem.label}
      style={[styles.fieldset, style]}
      disableBorder>
      {dataItem.options.map(option => (
        <SelectorWithImage
          active={option.key === 'clipping'}
          key={option.key}
          option={option}
          style={buttonStyle}
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

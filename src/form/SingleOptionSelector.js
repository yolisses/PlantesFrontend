import React from 'react';
import {StyleSheet} from 'react-native';
import {Fieldset} from './Fieldset';
import {SelectorWithImage} from './SelectorWithImage';
import {useLocalStorage} from 'storage/useLocalStorage';

export function SingleOptionSelector({dataItem, style, buttonStyle}) {
  const [savedValue, setSavedValue] = useLocalStorage(dataItem);

  return (
    <Fieldset
      label={dataItem.label}
      style={[styles.fieldset, style]}
      disableBorder>
      {dataItem.options.map(option => (
        <SelectorWithImage
          onPress={() => setSavedValue(option.key)}
          active={option.key === savedValue}
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

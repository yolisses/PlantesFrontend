import React, {useMemo} from 'react';
import {StyleSheet} from 'react-native';
import {Fieldset} from './Fieldset';
import {ToggleButton} from './ToggleButton';

export function TagsSelector({
  name,
  label,
  style,
  options,
  pushTag,
  removeTag,
  buttonStyle,
  selectedTags,
  ...rest
}) {
  return useMemo(
    () => (
      <Fieldset label={label} style={[styles.fieldset, style]} disableBorder>
        {options.map(option => (
          <ToggleButton
            option={option}
            key={option.key}
            pushTag={pushTag}
            style={buttonStyle}
            removeTag={removeTag}
            active={selectedTags.indexOf(option.key) !== -1}
          />
        ))}
      </Fieldset>
    ),
    [selectedTags],
  );
}

const styles = StyleSheet.create({
  fieldset: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 0,
  },
});

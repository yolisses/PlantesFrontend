import React, {useEffect, useState} from 'react';
import {TextInput} from './TextInput';

export function TextInputSaved({
  label,
  validate,
  allowRegex,
  formatSavedText,
  ...rest
}) {
  const [currentText, setCurrentText] = useState('');

  const onEndEditing = () => {
    if (validate) {
      validate(
        currentText,
        value => {
          setSavedValue(value);
          refresh();
        },
        refresh,
      );
    } else {
      setSavedValue(currentText);
    }
  };

  const onChangeText = text => {
    let newText = text;
    if (allowRegex) {
      const result = text.match(allowRegex);
      newText = result?.length ? result[0] : '';
    }
    setCurrentText(newText);
  };

  function refresh() {
    setCurrentText(
      savedValue !== null
        ? formatSavedText
          ? formatSavedText(savedValue)
          : '' + savedValue
        : '',
    );
  }

  useEffect(refresh, [savedValue]);

  return (
    <TextInput
      {...rest}
      label={label}
      onChangeText={onChangeText}
      onEndEditing={onEndEditing}
      value={currentText}
    />
  );
}

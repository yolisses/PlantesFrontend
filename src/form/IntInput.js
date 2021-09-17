import React from 'react';

import {TextInput} from 'form/TextInput';
import {allowRegexInt} from 'form/allowRegex/allowRegexInt';

export function IntInput({id, data, ...rest}) {
  function onChangeText(text, setValue) {
    const numberText = text.match(allowRegexInt);
    if (numberText) {
      const number = Number(numberText[0]);
      data[id] = number;
      setValue(number);
      console.error(data);
    } else {
      data[id] = null;
      setValue(null);
      console.error(data);
    }
  }

  return (
    <TextInput
      {...rest}
      autoCorrect={false}
      autoCompleteType={'off'}
      keyboardType="number-pad"
      customOnChangeText={onChangeText}
    />
  );
}

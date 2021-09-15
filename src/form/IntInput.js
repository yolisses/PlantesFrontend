import React from 'react';

import {TextInput} from 'form/TextInput';
import {allowRegexInt} from 'form/allowRegex/allowRegexInt';

export function IntInput({setValue, ...rest}) {
  function onChangeText(text) {
    const numberText = text.match(allowRegexInt);
    if (numberText) {
      setValue(Number(numberText[0]));
    } else {
      setValue(null);
    }
  }

  return (
    <TextInput
      {...rest}
      autoCorrect={false}
      setValue={onChangeText}
      autoCompleteType={'off'}
      keyboardType="number-pad"
    />
  );
}

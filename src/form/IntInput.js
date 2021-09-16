import React from 'react';

import {TextInput} from 'form/TextInput';
import {allowRegexInt} from 'form/allowRegex/allowRegexInt';

export function IntInput({id, dispatch, ...rest}) {
  function onChangeText(text) {
    const numberText = text.match(allowRegexInt);
    if (numberText) {
      dispatch({id, value: Number(numberText[0])});
    } else {
      dispatch({id, value: null});
    }
  }

  return (
    <TextInput
      {...rest}
      autoCorrect={false}
      autoCompleteType={'off'}
      keyboardType="number-pad"
      onChangeText={onChangeText}
    />
  );
}

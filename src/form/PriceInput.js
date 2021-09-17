import React from 'react';

import {TextInput} from 'form/TextInput';

import {MoneySign} from './MoneySign';
import {allowRegexMoney} from './allowRegex/allowRegexMoney';
import {numberToMoney} from 'utils/numberToMoney';

export function PriceInput({id, data, onValueChange, ...rest}) {
  function onBlur(e, value, setValue) {
    const number = data[id];
    if (number === null) {
      setValue(null);
    } else {
      setValue(numberToMoney(number));
    }

    console.error(data);
  }

  function onChangeText(text, setValue) {
    const numberText = text.match(allowRegexMoney);
    if (numberText) {
      const number = Number(numberText[0].replace(',', '.'));
      data[id] = number;
      setValue(numberText[0]);
    } else {
      data[id] = null;
      setValue(null);
    }
  }

  return (
    <TextInput
      {...rest}
      onBlur={onBlur}
      autoCorrect={false}
      autoCompleteType={'off'}
      leftChild={<MoneySign />}
      keyboardType="decimal-pad"
      onChangeText={onChangeText}
    />
  );
}

import React from 'react';

import {TextInput} from 'form/TextInput';

import {MoneySign} from './MoneySign';
import {allowRegexMoney} from './allowRegex/allowRegexMoney';
import {numberToMoney} from 'utils/numberToMoney';

export function PriceInput({id, data, onChangeValue, ...rest}) {
  function onBlur(e, value, setValue) {
    const number = data[id];
    if (number === null) {
      setValue(null);
    } else {
      setValue(numberToMoney(number));
    }
  }

  function onChangeText(text, setValue) {
    const numberText = text.match(allowRegexMoney);

    const newNumber = numberText
      ? Number(numberText[0].replace(',', '.'))
      : null;
    data[id] = newNumber;
    if (onChangeValue) {
      onChangeValue(newNumber);
    }

    const newText = numberText ? numberText[0] : null;
    setValue(newText);
  }

  function getInitialValue() {
    if (data[id]) {
      return numberToMoney(data[id]);
    }
    return null;
  }

  return (
    <TextInput
      {...rest}
      autoCorrect={false}
      customOnBlur={onBlur}
      autoCompleteType={'off'}
      leftChild={<MoneySign />}
      // keyboardType="decimal-pad"
      customOnChangeText={onChangeText}
      customGetInitialValue={getInitialValue}
    />
  );
}

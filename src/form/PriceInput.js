import React, {useState} from 'react';

import {TextInput} from 'form/TextInput';

import {MoneySign} from './MoneySign';
import {getRegexMoney} from './getRegex/getRegexMoney';
import {allowRegexMoney} from './allowRegex/allowRegexMoney';
import {numberToMoney} from 'utils/numberToMoney';

export function PriceInput({setValue, value, ...rest}) {
  const [localValue, setLocalValue] = useState(
    value ? numberToMoney(value) : '',
  );

  function onChangeText(text) {
    const numberText = text.match(allowRegexMoney);
    if (numberText) {
      setLocalValue(numberText[0]);
    } else {
      setLocalValue(null);
    }
  }

  function onBlur() {
    if (!localValue) {
      setValue(null);
      return;
    }
    const numberText = localValue.match(getRegexMoney);
    const number = Number(numberText[0].replace(',', '.'));
    setValue(number);
    setLocalValue(numberToMoney(number));
  }

  return (
    <TextInput
      {...rest}
      onBlur={onBlur}
      value={localValue}
      autoCorrect={false}
      setValue={onChangeText}
      autoCompleteType={'off'}
      leftChild={<MoneySign />}
      keyboardType="decimal-pad"
    />
  );
}

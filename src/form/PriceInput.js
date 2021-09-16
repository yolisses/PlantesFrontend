import React, {useState} from 'react';

import {TextInput} from 'form/TextInput';

import {MoneySign} from './MoneySign';
import {getRegexMoney} from './getRegex/getRegexMoney';
import {allowRegexMoney} from './allowRegex/allowRegexMoney';
import {numberToMoney} from 'utils/numberToMoney';

export function PriceInput({id, dispatch, value, ...rest}) {
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
      dispatch({id, value: null});
      return;
    }
    const numberText = localValue.match(getRegexMoney);
    const number = Number(numberText[0].replace(',', '.'));
    dispatch({id, value: number});
    setLocalValue(numberToMoney(number));
  }

  return (
    <TextInput
      {...rest}
      onBlur={onBlur}
      value={localValue}
      autoCorrect={false}
      autoCompleteType={'off'}
      leftChild={<MoneySign />}
      keyboardType="decimal-pad"
      onChangeText={onChangeText}
    />
  );
}

import React, {useState} from 'react';

import {TextInput} from 'form/TextInput';
import {allowRegexMoney} from './allowRegex/allowRegexMoney';
import {Text} from 'react-native';

export function PriceInput({setValue, value, ...rest}) {
  const [localValue, setLocalValue] = useState('');

  function onChangeText(text) {
    const numberText = text.match(allowRegexMoney);
    if (numberText) {
      setLocalValue(numberText[0]);
    } else {
      setLocalValue(null);
    }
  }

  return (
    <>
      <Text>{'value ' + JSON.stringify(value)}</Text>
      <Text>{'local value ' + JSON.stringify(localValue)}</Text>
      <TextInput
        {...rest}
        value={localValue}
        autoCorrect={false}
        setValue={onChangeText}
        autoCompleteType={'off'}
        keyboardType="default"
      />
    </>
  );
}

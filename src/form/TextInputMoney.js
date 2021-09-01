import React from 'react';
import {allowRegexMoney} from './allowRegex/allowRegexMoney';
import {getRegexMoney} from './getRegex.js/getRegexMoney';
import {MoneySign} from './MoneySign';
import {TextInputSaved} from './TextInputSaved';

export function TextInputMoney({leftChild, ...rest}) {
  const validate = (text, resolve, reject) => {
    const result = text.match(getRegexMoney);
    if (result?.length) {
      const numberValue = Number(result[0].replace(',', '.'));
      resolve(numberValue);
    } else {
      reject();
    }
  };

  return (
    <TextInputSaved
      {...rest}
      formatSavedText={value => value.toFixed(2).replace('.', ',')}
      allowRegex={allowRegexMoney}
      leftChild={<MoneySign />}
      autoCorrect={false}
      autoCompleteType={'off'}
      validate={validate}
      keyboardType="decimal-pad"
    />
  );
}

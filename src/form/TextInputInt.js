import React from 'react';
import {getRegexInt} from './getRegex.js/getRegexInt';
import {allowRegexInt} from './allowRegex/allowRegexInt';
import {TextInputSaved} from './TextInputSaved';

export function TextInputInt({leftChild, ...rest}) {
  const validate = (text, resolve, reject) => {
    if (text === '') {
      resolve(null);
    }
    console.error(typeof text);
    const result = text.match(getRegexInt);
    if (result?.length) {
      const numberValue = Number(result[0]);
      resolve(numberValue);
    } else {
      reject();
    }
  };

  return (
    <TextInputSaved
      {...rest}
      allowRegex={allowRegexInt}
      autoCorrect={false}
      autoCompleteType={'off'}
      validate={validate}
      keyboardType="decimal-pad"
    />
  );
}

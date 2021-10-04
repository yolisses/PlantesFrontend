import React from 'react';

import {TextInput} from 'form/TextInput';

import {MoneySign} from './MoneySign';

export function PriceInput({...rest}) {
  console.error();
  return (
    <TextInput
      {...rest}
      autoCorrect={false}
      autoCompleteType={'off'}
      leftChild={<MoneySign />}
      keyboardType="decimal-pad"
    />
  );
}

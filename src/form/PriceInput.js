import React from 'react';

import {TextInput} from 'form/TextInput';

import {MoneySign} from './MoneySign';

export function PriceInput({...rest}) {
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

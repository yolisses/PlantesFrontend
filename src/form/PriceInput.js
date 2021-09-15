import React from 'react';

import {MoneySign} from 'form/MoneySign';
import {TextInput} from 'form/TextInput';

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

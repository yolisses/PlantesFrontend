import React from 'react';

import {MoneySign} from 'form/MoneySign';
import {TextInput} from 'form/TextInput';

export function PriceInput() {
  return (
    <TextInput
      label="Preço"
      autoCorrect={false}
      autoCompleteType={'off'}
      leftChild={<MoneySign />}
      keyboardType="decimal-pad"
    />
  );
}

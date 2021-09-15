import React from 'react';

import {MoneySign} from 'form/MoneySign';
import {TextInput} from 'form/TextInput';

export function PriceInput({hide}) {
  return !hide ? (
    <TextInput
      label="Preço"
      autoCorrect={false}
      autoCompleteType={'off'}
      leftChild={<MoneySign />}
      keyboardType="decimal-pad"
    />
  ) : null;
}

import React from 'react';
import {Field, useField} from 'react-final-form';

import {MoneySign} from 'form/MoneySign';
import {TextInput} from 'form/TextInput';
import {allowRegexMoney} from 'form/allowRegex/allowRegexMoney';

export function PriceInput() {
  const {
    input: {value: sell},
  } = useField('availabilities.sell');

  return sell ? (
    <Field
      name="price"
      type="number"
      format={value => {
        const found = value?.match(allowRegexMoney);
        return found ? found[0] : null;
      }}
      render={({input, meta}) => {
        return (
          <TextInput
            {...input}
            label="Preço"
            error={meta.error}
            autoCorrect={false}
            active={meta.active}
            onBlur={e => {
              input.onBlur(e);
            }}
            autoCompleteType={'off'}
            leftChild={<MoneySign />}
            keyboardType="decimal-pad"
          />
        );
      }}
    />
  ) : null;
}

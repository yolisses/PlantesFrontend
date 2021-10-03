import React from 'react';

import {TextInput} from 'form/TextInput';

export function IntInput({maxLength, ...rest}) {
  return (
    <TextInput
      {...rest}
      autoCorrect={false}
      autoCompleteType={'off'}
      keyboardType="number-pad"
      maxLength={maxLength || 4}
    />
  );
}

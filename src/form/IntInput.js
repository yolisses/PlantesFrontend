import React from 'react';

import {TextInput} from 'form/TextInput';

export function IntInput({...rest}) {
  return (
    <TextInput
      {...rest}
      autoCorrect={false}
      autoCompleteType={'off'}
      keyboardType="number-pad"
    />
  );
}

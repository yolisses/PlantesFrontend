import React from 'react';

import {TextInput} from 'form/TextInput';
import axios from 'axios';
import {useObserver} from 'mobx-react-lite';
import {locationToString} from 'common/locationToString';

export function CepInput({id, data, ...rest}) {
  function validateCep({setError, value}) {
    console.error(value);

    if (value && value.length !== 8) {
      setError('O CEP precisa de 8 algarismos');
    }
  }

  function validateOnType({setError, setDescription, setValue, text}) {
    console.error(text);
    setError();
    if (text.length === 8) {
      setDescription('carregando...');
      axios.get('https://viacep.com.br/ws/' + text + '/json/').then(res => {
        console.error(res.data);
        if (res.data.erro) {
          setError('O CEP digitado não existe');
          setDescription();
        } else {
          setValue(text);
          setDescription(locationToString(res.data));
        }
      });
    } else {
      setDescription();
    }
  }

  return useObserver(() => (
    <TextInput
      id={id}
      data={data}
      label="CEP"
      maxLength={8}
      autoCorrect={false}
      placeholder="00000000"
      autoCompleteType={'off'}
      keyboardType="number-pad"
      blurValidate={validateCep}
      textValidate={validateOnType}
      {...rest}
    />
  ));
}

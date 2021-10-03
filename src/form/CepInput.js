import React from 'react';

import {TextInput} from 'form/TextInput';
import axios from 'axios';
import {useObserver} from 'mobx-react-lite';
import {locationToString} from 'common/locationToString';

export function CepInput({id, data, ...rest}) {
  function validateOnType({setError, setDescription, setValue, text}) {
    console.error(text);
    setError();
    if (text.length === 8) {
      setDescription('carregando...');
      axios.get('https://viacep.com.br/ws/' + text + '/json/').then(res => {
        console.error(res.data);
        if (res.data.erro) {
          setError('O CEP digitado não existe');
          data.errors[id] = true;
          setDescription();
        } else {
          setValue(text);
          data.errors[id] = false;
          setDescription(locationToString(res.data));
        }
      });
    } else if (text) {
      setError('O CEP precisa de 8 algarismos');
      data.errors[id] = true;
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
      textValidate={validateOnType}
      {...rest}
    />
  ));
}

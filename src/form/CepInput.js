import React, {useState} from 'react';

import {TextInput} from 'form/TextInput';
import axios from 'axios';
import {useObserver} from 'mobx-react-lite';
import {concatWithCommas} from 'common/concatWithCommas';
import {cepToString} from 'common/cepToString';

export function CepInput({id, data, ...rest}) {
  const [found, setFound] = useState();
  const [error, setError] = useState();

  function customOnChangeText(text, setValue) {
    if (text.length === 8) {
      data[id] = text;
      setFound('carregando');
      axios.get('https://viacep.com.br/ws/' + text + '/json/').then(res => {
        console.error(res.data);
        if (res.data.erro) {
          setError(true);
        } else {
          setError(false);
          setFound(cepToString(res.data));
        }
      });
    } else {
      setError(false);
      setFound(false);
    }
    setValue(text);
  }

  return useObserver(() => (
    <TextInput
      id={id}
      data={data}
      label="CEP"
      maxLength={8}
      autoCorrect={false}
      error={error && 'Esse CEP não existe'}
      description={found}
      placeholder="00000000"
      customOnChangeText={customOnChangeText}
      autoCompleteType={'off'}
      keyboardType="number-pad"
    />
  ));
}

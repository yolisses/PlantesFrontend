import React from 'react';
import {useNavigation} from '@react-navigation/core';

import {useObserver} from 'mobx-react-lite';
import {pushSending} from 'send/sendings';
import {ItemEdit} from './ItemEdit';

export function EditScreen() {
  const {navigate} = useNavigation();

  function onSubmit(item) {
    pushSending(item);
    navigate('Home');
  }

  return useObserver(() => <ItemEdit onSubmit={onSubmit} />);
}

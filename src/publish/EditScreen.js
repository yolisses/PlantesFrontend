import React from 'react';
import {useNavigation} from '@react-navigation/core';

import {useObserver} from 'mobx-react-lite';
import {pushSending} from 'send/sendings';
import {ItemEdit} from './ItemEdit';

export function EditScreen({route}) {
  const {navigate} = useNavigation();

  const {item} = route.params;

  function onSubmit(item) {
    pushSending(item);
    navigate('Home');
  }

  return useObserver(() => <ItemEdit onSubmit={onSubmit} item={item} />);
}

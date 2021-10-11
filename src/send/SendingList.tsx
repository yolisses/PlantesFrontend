import {useObserver} from 'mobx-react-lite';
import React from 'react';
import {FlatList} from 'react-native';
import {send} from './sendings';
import {SendingWarn} from './SendingWarn';

export function SendingList() {
  return useObserver(() => (
    <FlatList
      data={Object.values(send.sendings)}
      renderItem={({item}) => <SendingWarn shipment={item} />}
    />
  ));
}

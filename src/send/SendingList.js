import React from 'react';
import {FlatList} from 'react-native';
import {SendingWarn} from './SendingWarn';

export function SendingList() {
  return <FlatList data={[1, 2, 3]} renderItem={({item}) => <SendingWarn />} />;
}

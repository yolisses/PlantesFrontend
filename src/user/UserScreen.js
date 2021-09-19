import {FooterNavigationLayout} from 'navigation/FooterNavigationLayout';
import React from 'react';
import {FlatList, Text} from 'react-native';
import {useSending} from 'send/SendingContext';

export function UserScreen() {
  const {sendings} = useSending();

  function renderItem({item}) {
    return <Text>{JSON.stringify(item)}</Text>;
  }

  return (
    <FooterNavigationLayout>
      <FlatList data={[sendings]} renderItem={renderItem} />
    </FooterNavigationLayout>
  );
}

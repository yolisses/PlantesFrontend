import React from 'react';
import {FlatList} from 'react-native';
import {Card} from 'store/Card';

export function CardsListLoading() {
  return (
    <FlatList
      data={Object.keys([...Array(8)])}
      numColumns={2}
      renderItem={item => <Card key={item} item={{}} />}
      keyExtractor={item => item}
    />
  );
}

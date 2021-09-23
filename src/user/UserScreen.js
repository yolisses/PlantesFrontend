import {SquareImage} from 'common/SquareImage';
import {RerenderTester} from 'dev/rerenderTester';
import {FooterNavigationLayout} from 'navigation/FooterNavigationLayout';
import React, {Fragment} from 'react';
import {FlatList, Text} from 'react-native';
import {useSending} from 'send/SendingContext';

const numberOfCollums = 3;

export function UserScreen() {
  const {sendings} = useSending();
  console.error(sendings);

  function renderItem({item}) {
    return (
      <Fragment key={item[0]}>
        <SquareImage source={{uri: item[1].images[0]}} />
        <Text>{JSON.stringify(item)}</Text>
      </Fragment>
    );
  }

  return (
    <FooterNavigationLayout>
      <RerenderTester />
      <FlatList
        data={Object.entries(sendings)}
        renderItem={renderItem}
        numColumns={numberOfCollums}
      />
    </FooterNavigationLayout>
  );
}

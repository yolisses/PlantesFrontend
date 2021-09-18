import React from 'react';
import {FlatList} from 'react-native';

import {Card} from 'store/Card';
import {CustomHeader} from 'publish/CustomHeader';
import {UserRoundImage} from 'common/UserRoundImage';
import {CardsListLoading} from 'store/CardsListLoading';
import {FooterNavigationLayout} from 'navigation/FooterNavigationLayout';

import {useQuery, gql} from '@apollo/client';

const PLANTS = gql`
  query {
    getAllPlants {
      id
      name
      type
      card
    }
  }
`;

export function StoreScreen() {
  const {loading, error, data} = useQuery(PLANTS);

  if (error) {
    console.error(error);
  }

  return (
    <FooterNavigationLayout selected={'Home'}>
      <CustomHeader title="Plantei" right={<UserRoundImage size={40} />} />
      {loading || error ? (
        <CardsListLoading />
      ) : (
        <FlatList
          numColumns={2}
          data={data.getAllPlants}
          renderItem={({item}) => <Card item={item} />}
        />
      )}
    </FooterNavigationLayout>
  );
}

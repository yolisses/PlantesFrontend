import React from 'react';
import {FooterNavigationLayout} from 'navigation/FooterNavigationLayout';

import {Card} from 'store/Card';
import {CardsListFooter} from './CardsListFooter';
import {CardsListLoading} from './CardsListLoading';
import {InfiniteScroll} from 'common/InfiniteScroll';
import {useQuery, gql} from '@apollo/client';
import {FlatList, Text} from 'react-native';

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

  if (loading || error) {
    return <CardsListLoading />;
  }

  return (
    <FooterNavigationLayout selected={'Home'}>
      <FlatList
        numColumns={2}
        data={data.getAllPlants}
        renderItem={({item}) => <Card item={item} />}
      />
      {/* <InfiniteScroll
        numColumns={2}
        loadingFooter={<CardsListFooter />}
        startingComponent={<CardsListLoading />}
        renderItem={({item}) => <Card key={item.id} item={item} />}
        getUrl={(page, limit) => `/cards?_page=${page}&_limit=${limit}`}
      /> */}
    </FooterNavigationLayout>
  );
}

import {FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';

import {observe} from 'mobx';
import {useObserver} from 'mobx-react-lite';

import {api} from 'api';
import {Card} from 'home/Card';
import {searchOptions} from 'search/searchOptions';
import {CardsListLoading} from 'home/CardsListLoading';
import {SearchCustomHeader} from 'search/SearchCustomHeader';
import {createHidableHeader} from 'common/createHidableHeader';
import {FooterNavigationLayout} from 'navigation/FooterNavigationLayout';

export function HomeScreen() {
  const [plants, setPlants] = useState([]);

  const {onScroll, HidableHeader} = createHidableHeader({
    headerHeight: 60,
    unsafeArea: 25,
  });

  useEffect(
    () =>
      observe(searchOptions, () => {
        api
          .get('/plants/' + 0, {params: searchOptions})
          .then(res => setPlants(res.data))
          .catch(err => console.error('setplants', Math.random()));
      }),
    [],
  );

  return useObserver(() => (
    <FooterNavigationLayout selected={'Home'}>
      <SearchCustomHeader HidableHeader={HidableHeader} />
      {!plants ? (
        <CardsListLoading />
      ) : (
        <FlatList
          data={plants}
          numColumns={2}
          onScroll={onScroll}
          // onEndReached={getPlants}
          onEndReachedThreshold={0.5}
          contentContainerStyle={{paddingTop: 100}}
          renderItem={({item}) => <Card item={item} />}
        />
      )}
    </FooterNavigationLayout>
  ));
}

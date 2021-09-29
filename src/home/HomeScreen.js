import {FlatList} from 'react-native';
import React, {useEffect} from 'react';

import {observe} from 'mobx';
import {useObserver} from 'mobx-react-lite';

import {api} from 'api';
import {Card} from 'home/Card';
import {loadPlants} from 'home/loadPlants';
import {searchOptions} from 'search/searchOptions';
import {CardsListLoading} from 'home/CardsListLoading';
import {SearchCustomHeader} from 'search/SearchCustomHeader';
import {createHidableHeader} from 'common/createHidableHeader';
import {FooterNavigationLayout} from 'navigation/FooterNavigationLayout';

export function HomeScreen() {
  const {onScroll, HidableHeader} = createHidableHeader({
    headerHeight: 55,
    unsafeArea: 25,
  });

  async function getPlants() {
    if (loadPlants.loading || loadPlants.ended) {
      return;
    }
    loadPlants.loading = true;
    const res = await api.get('/plants/' + loadPlants.page, {
      params: searchOptions,
    });
    loadPlants.plants = loadPlants.plants.concat(res.data);
    if (res.data.length === 0) {
      loadPlants.ended = true;
    }
    loadPlants.loading = false;
    loadPlants.page = loadPlants.page + 1;
  }

  function onEndReached() {
    getPlants();
  }

  function reset() {
    loadPlants.page = 0;
    loadPlants.plants = [];
    loadPlants.ended = false;
    loadPlants.loading = false;
  }

  useEffect(
    () =>
      observe(searchOptions, () => {
        reset();
        getPlants();
      }),
    [],
  );

  return useObserver(() => (
    <FooterNavigationLayout selected={'Home'}>
      <SearchCustomHeader HidableHeader={HidableHeader} />
      {!loadPlants.plants ? (
        <CardsListLoading />
      ) : (
        <FlatList
          numColumns={2}
          onScroll={onScroll}
          data={loadPlants.plants}
          onEndReached={onEndReached}
          onEndReachedThreshold={0.5}
          contentContainerStyle={{paddingTop: 95}}
          renderItem={({item}) => <Card item={item} />}
        />
      )}
    </FooterNavigationLayout>
  ));
}

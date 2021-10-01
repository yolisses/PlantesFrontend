import {FlatList} from 'react-native';
import React, {useEffect} from 'react';

import {observe} from 'mobx';
import {useObserver} from 'mobx-react-lite';

import {api} from 'api';
import {Card} from 'home/Card';
import {loadPlants} from 'home/loadPlants';
import {SearchCustomHeader} from 'search/SearchCustomHeader';
import {FooterNavigationLayout} from 'navigation/FooterNavigationLayout';

export function HomeScreen() {
  async function getPlants() {
    if (loadPlants.loading || loadPlants.ended) {
      return;
    }
    loadPlants.loading = true;
    const res = await api.get('/plants/' + loadPlants.page);
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

  useEffect(() => {
    observe(loadPlants, () => {
      if (loadPlants.reset) {
        getPlants();
        console.error('chama');
        loadPlants.reset = false;
      }
    });
    getPlants();
  }, []);

  return useObserver(() => (
    <FooterNavigationLayout selected={'Home'}>
      <SearchCustomHeader />
      <FlatList
        numColumns={2}
        data={loadPlants.plants}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.5}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => <Card item={item} />}
      />
    </FooterNavigationLayout>
  ));
}

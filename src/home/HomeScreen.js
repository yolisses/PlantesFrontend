import {FlatList, ScrollView, Text} from 'react-native';
import React, {useEffect} from 'react';

import {observe} from 'mobx';
import {useObserver} from 'mobx-react-lite';

import {api} from 'api';
import {Card} from 'home/Card';
import {loadPlants} from 'home/loadPlants';
import {SearchCustomHeader} from 'search/SearchCustomHeader';
import {FooterNavigationLayout} from 'navigation/FooterNavigationLayout';
import {searchOptions} from 'search/searchOptions';
import {formatSearch} from 'search/formatSearch';
import {SendingList} from 'send/SendingList';
import {LoadingScrollFooter} from 'common/LoadingScrollFooter';

export function HomeScreen() {
  async function getPlants() {
    if (loadPlants.loading || loadPlants.ended) {
      return;
    }
    loadPlants.loading = true;
    const res = await api.post(
      '/plants/' + loadPlants.page,
      formatSearch(searchOptions),
    );
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
      if (loadPlants.refresh) {
        getPlants();
        loadPlants.refresh = false;
      }
    });
    getPlants();
  }, []);

  return useObserver(() => (
    <FooterNavigationLayout selected={'Home'}>
      <SearchCustomHeader />
      <ScrollView>
        <Text>
          {JSON.stringify({
            loading: loadPlants.loading,
            page: loadPlants.page,
            ended: loadPlants.ended,
          })}
        </Text>
      </ScrollView>
      <FlatList
        numColumns={2}
        data={loadPlants.plants}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.5}
        ListHeaderComponent={<SendingList />}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={!loadPlants.ended && <LoadingScrollFooter />}
        renderItem={({item}) => <Card item={item} />}
      />
    </FooterNavigationLayout>
  ));
}

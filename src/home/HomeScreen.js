import {FlatList, View} from 'react-native';
import React, {useEffect} from 'react';

import {observe} from 'mobx';
import {useObserver} from 'mobx-react-lite';

import {api} from 'api';
import {Card} from 'home/Card';
import {loadPlants} from 'home/loadPlants';
import {SearchCustomHeader} from 'search/SearchCustomHeader';
import {searchOptions} from 'search/searchOptions';
import {formatSearch} from 'search/formatSearch';
import {SendingList} from 'send/SendingList';
import {LoadingScrollFooter} from 'common/LoadingScrollFooter';
import {NotFound} from './NotFound';
import {NetworkError} from './NetworkError';
import {LocationOption} from './LocationOption';

export function HomeScreen() {
  async function getPlants() {
    try {
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
    } catch (err) {
      loadPlants.networkError = true;
      loadPlants.loading = false;
      console.error('aqui', err);
    }
  }

  function retry() {
    loadPlants.networkError = false;
    getPlants();
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
    <View style={{flex: 1}}>
      <SearchCustomHeader />
      {loadPlants.plants.length === 0 && loadPlants.networkError && (
        <NetworkError retry={retry} />
      )}
      {loadPlants.plants.length === 0 && loadPlants.ended ? (
        <NotFound />
      ) : (
        <FlatList
          numColumns={2}
          data={loadPlants.plants}
          onEndReached={onEndReached}
          onEndReachedThreshold={0.5}
          ListHeaderComponent={
            <>
              <LocationOption />
              <SendingList />
            </>
          }
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: !loadPlants.loading ? 60 : 0}}
          ListFooterComponent={loadPlants.loading && <LoadingScrollFooter />}
          renderItem={({item}) => <Card item={item} />}
        />
      )}
    </View>
  ));
}

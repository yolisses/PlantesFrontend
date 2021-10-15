import React, {useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';

import {api} from 'api/api';
import {Card} from 'home/Card';
import {SendingList} from 'send/SendingList';
import {formatSearch} from 'search/formatSearch';
import {searchOptions} from 'search/searchOptions';
import {LocationOption} from 'home/LocationOption';
import {FooterNavigation} from 'navigation/FooterNavigation';
import {SearchCustomHeader} from 'search/SearchCustomHeader';
import {observe} from 'mobx';

export function HomeScreen() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);

  async function getPlants() {
    const res = await api.get('plants/' + page, formatSearch(searchOptions));
    setData(old => [...old, ...res.data]);
  }

  async function getNextPage() {
    if (loading) {
      return;
    }
    setLoading(true);
    setPage(old => old + 1);
    await getPlants();
    setLoading(false);
  }

  useEffect(() => {
    observe(searchOptions, getNextPage);
    getNextPage();
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{flex: 1}}>
        <SearchCustomHeader />
        <FlatList
          data={data}
          numColumns={2}
          onEndReached={getNextPage}
          onEndReachedThreshold={0.3}
          ListHeaderComponent={
            <>
              <LocationOption />
              <SendingList />
            </>
          }
          keyExtractor={({item}) => item?.id}
          renderItem={({item}) => <Card item={item} />}
        />
      </View>
      <FooterNavigation selected="Home" />
    </View>
  );
}

import React, {useEffect} from 'react';
import {View} from 'react-native';
import {useQueryClient} from 'react-query';
import {observe} from 'mobx';

import {api} from 'api/api';
import {formatSearch} from 'search/formatSearch';
import {searchOptions} from 'search/searchOptions';
import {FooterNavigation} from 'navigation/FooterNavigation';
import {SearchCustomHeader} from 'search/SearchCustomHeader';
import {InfiniteScroll} from 'common/InfiniteScroll';

export function HomeScreen() {
  async function getPlants({pageParam = 0}) {
    const res = await api.get('plants/' + pageParam, {
      params: formatSearch(searchOptions),
    });
    return res.data;
  }

  const queryClient = useQueryClient();

  useEffect(() => {
    observe(searchOptions, () => {
      queryClient.invalidateQueries('plants');
    });
  }, []);

  return (
    <>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <SearchCustomHeader />
        <InfiniteScroll getData={getPlants} />
      </View>
      <FooterNavigation selected="Home" />
    </>
  );
}

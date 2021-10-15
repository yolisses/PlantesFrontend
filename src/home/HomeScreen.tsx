import React, {useEffect} from 'react';
import {Button, FlatList, View} from 'react-native';
import {useInfiniteQuery, useQueryClient} from 'react-query';
import {observe} from 'mobx';

import {api} from 'api/api';
import {Card} from 'home/Card';
import {NotFound} from 'home/NotFound';
import {SendingList} from 'send/SendingList';
import {NetworkError} from 'home/NetworkError';
import {formatSearch} from 'search/formatSearch';
import {searchOptions} from 'search/searchOptions';
import {LocationOption} from 'home/LocationOption';
import {FooterNavigation} from 'navigation/FooterNavigation';
import {SearchCustomHeader} from 'search/SearchCustomHeader';
import {LoadingScrollFooter} from 'common/LoadingScrollFooter';

export function HomeScreen() {
  async function getPlants({pageParam = 0}) {
    const res = await api.get('plants/' + pageParam, {
      params: formatSearch(searchOptions),
    });
    return res.data;
  }

  const {
    data,
    error,
    isFetching,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery('plants', getPlants, {
    getNextPageParam: lastPage => {
      return lastPage.nextPage;
    },
    retry: 0,
  });

  function getFlatedArray(data) {
    return data?.pages ? data.pages.flatMap(page => [...page.content]) : [];
  }

  function onEndReached() {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }

  const queryClient = useQueryClient();

  const isNotResultFound = data?.pages[0].totalCount === 0;

  useEffect(() => {
    observe(searchOptions, () => {
      queryClient.invalidateQueries('plants');
    });
  }, []);

  return (
    <>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <SearchCustomHeader />
        <FlatList
          numColumns={2}
          onEndReached={onEndReached}
          data={getFlatedArray(data)}
          onEndReachedThreshold={0.4}
          ListHeaderComponent={
            <>
              <LocationOption />
              <SendingList />
            </>
          }
          renderItem={({item}) => <Card item={item} />}
          ListFooterComponent={
            <>
              <LoadingScrollFooter active={!error && isFetching} />
              {error && <NetworkError retry={onEndReached} />}
              {!hasNextPage && isNotResultFound && <NotFound />}
            </>
          }
        />
        {/* <Button title="fetch" onPress={fetchNextPage} /> */}
      </View>
      <FooterNavigation selected="Home" />
    </>
  );
}

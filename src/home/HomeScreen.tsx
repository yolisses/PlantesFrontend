import React, {useEffect} from 'react';
import {FlatList, View} from 'react-native';
import {useInfiniteQuery, useQueryClient} from 'react-query';
import {observe} from 'mobx';

import {api} from 'api/api';
import {formatSearch} from 'search/formatSearch';
import {searchOptions} from 'search/searchOptions';
import {FooterNavigation} from 'navigation/FooterNavigation';
import {SearchCustomHeader} from 'search/SearchCustomHeader';
import {LocationOption} from './LocationOption';
import {SendingList} from 'send/SendingList';
import {LoadingScrollFooter} from 'common/LoadingScrollFooter';
import {NetworkError} from './NetworkError';
import {NotFound} from './NotFound';
import {getFlatedArray} from 'common/getFlatedArray';
import {Card} from './Card';

export function HomeScreen() {
  async function getPlants({pageParam = 0}) {
    const res = await api.get('plants/', {
      params: {
        ...formatSearch(searchOptions),
        page: pageParam,
      },
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
    refetch,
  } = useInfiniteQuery('plants', getPlants, {
    getNextPageParam: lastPage => {
      return lastPage.nextPage;
    },
    retry: 0,
  });

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
      <SearchCustomHeader />
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <FlatList
          numColumns={2}
          onEndReached={onEndReached}
          data={getFlatedArray(data)}
          onEndReachedThreshold={0.4}
          renderItem={({item}) => <Card item={item} />}
          ListHeaderComponent={
            <>
              <LocationOption />
              <SendingList />
            </>
          }
          ListFooterComponent={
            <>
              <LoadingScrollFooter active={!error && isFetching} />
              {error && <NetworkError retry={refetch} />}
              {!hasNextPage && isNotResultFound && <NotFound />}
            </>
          }
        />
      </View>
      <FooterNavigation selected="Home" />
    </>
  );
}

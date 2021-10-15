import React, {useEffect} from 'react';
import {FlatList, Text} from 'react-native';
import {useInfiniteQuery, useQueryClient} from 'react-query';
import {observe} from 'mobx';

import {Card} from 'home/Card';
import {NotFound} from 'home/NotFound';
import {SendingList} from 'send/SendingList';
import {NetworkError} from 'home/NetworkError';
import {searchOptions} from 'search/searchOptions';
import {LocationOption} from 'home/LocationOption';
import {LoadingScrollFooter} from 'common/LoadingScrollFooter';

export function InfiniteScroll({getData}) {
  const {
    data,
    error,
    isFetching,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery('plants', getData, {
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
          {error && <NetworkError retry={onEndReached} />}
          {!hasNextPage && isNotResultFound && <NotFound />}
        </>
      }
    />
  );
}

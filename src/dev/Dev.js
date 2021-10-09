import {api} from 'api/api';
import {LoadingScrollFooter} from 'common/LoadingScrollFooter';
import {Card} from 'home/Card';
import {LocationOption} from 'home/LocationOption';
import {NetworkError} from 'home/NetworkError';
import {NotFound} from 'home/NotFound';
import {observe} from 'mobx';
import {FooterNavigation} from 'navigation/FooterNavigation';
import React, {useEffect} from 'react';
import {FlatList, View} from 'react-native';
import {useInfiniteQuery, useQueryClient} from 'react-query';
import {formatSearch} from 'search/formatSearch';
import {SearchCustomHeader} from 'search/SearchCustomHeader';
import {searchOptions} from 'search/searchOptions';

export function Dev() {
  async function fetchProjects({pageParam = 1}) {
    const res = await api.post(
      'plants/' + pageParam,
      formatSearch(searchOptions),
    );
    return res.data;
  }

  const {
    data,
    error,
    isFetching,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery('plants', fetchProjects, {
    getNextPageParam: lastPage => lastPage.nextPage,
    retry: 0,
  });

  function getFlatedArray(data) {
    return data?.pages ? data.pages.flatMap(page => [...page.docs]) : [];
  }

  function onEndReached() {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }

  const queryClient = useQueryClient();

  const isNotResultFound = data?.pages[0].totalDocs === 0;

  useEffect(() => {
    observe(searchOptions, () => {
      queryClient.resetQueries('plants');
    });
  }, []);

  return (
    <>
      <View style={{flex: 1}}>
        <SearchCustomHeader />
        <FlatList
          numColumns={2}
          data={getFlatedArray(data)}
          renderItem={({item}) => <Card item={item} />}
          onEndReached={onEndReached}
          onEndReachedThreshold={0.4}
          ListHeaderComponent={<LocationOption />}
          ListFooterComponent={
            <>
              {!error && isFetching && <LoadingScrollFooter />}
              {error && <NetworkError retry={onEndReached} />}
              {!hasNextPage && isNotResultFound && <NotFound />}
            </>
          }
        />
      </View>
      <FooterNavigation selected="Home" />
    </>
  );
}

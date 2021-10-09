import {api} from 'api/api';
import {Card} from 'home/Card';
import React from 'react';
import {Fragment} from 'react';
import {FlatList, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {useInfiniteQuery} from 'react-query';
import {RerenderTester} from './rerenderTester';

export function Dev() {
  async function fetchProjects({pageParam = 0}) {
    console.error('plants/' + pageParam);
    const res = await api.post('plants/' + pageParam);
    return res.data;
  }

  const {
    data,
    error,
    status,
    isFetching,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery('projects', fetchProjects, {
    getNextPageParam: lastPage => {
      console.error(lastPage);
      return lastPage.nextPage;
    },
  });

  return status === 'loading' ? (
    <Text>Loading...</Text>
  ) : status === 'error' ? (
    <Text>Error: {error?.response || JSON.stringify(error)}</Text>
  ) : (
    <ScrollView>
      <Text>{Object.keys(data.pages[0])}</Text>

      {data?.pages?.map(({docs: page}, i) => (
        <Fragment key={i}>
          {page?.map(item => (
            // <Text key={project?.id}>{project?.name}</Text>
            <Card item={item} />
          ))}
        </Fragment>
      ))}

      <View>
        <TouchableOpacity
          title="refresh"
          onPress={() => fetchNextPage()}
          disabled={!hasNextPage || isFetchingNextPage}>
          <Text>
            {isFetchingNextPage
              ? 'Loading more...'
              : hasNextPage
              ? 'Load More'
              : 'Nothing more to load'}
          </Text>
        </TouchableOpacity>
      </View>
      <Text>{isFetching && !isFetchingNextPage ? 'Fetching...' : null}</Text>
      <RerenderTester />
    </ScrollView>
  );
}

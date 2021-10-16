import React, {useEffect} from 'react';
import {FlatList, View} from 'react-native';
import {useInfiniteQuery, useQueryClient} from 'react-query';

import {observe} from 'mobx';

import {useUser} from './useUser';
import {UserInfo} from './UserInfo';
import {ConfigButton} from './ConfigButton';

import {api} from 'api/api';
import {Card} from 'home/Card';
import {send} from 'send/sendings';
import {BackButton} from 'common/BackButton';
import {CustomHeader} from 'common/CustomHeader';
import {FooterNavigation} from 'navigation/FooterNavigation';
import {getFlatedArray} from 'common/getFlatedArray';
import {LoadingScrollFooter} from 'common/LoadingScrollFooter';
import {NetworkError} from 'home/NetworkError';
import {NotFound} from 'home/NotFound';
import {auth} from 'auth/auth';

export function UserScreen({route}) {
  const {userId: userIdParam} = route.params || {};
  const userId = userIdParam || auth?.user?.id;
  const {data: user} = useUser(userId);
  const queryClient = useQueryClient();

  async function getPlants({pageParam = 0}) {
    try {
      const res = await api.get(`users/${userId}/plants`, {
        params: {page: pageParam},
      });
      return res.data;
    } catch (err) {
      console.error(err.response || err);
      throw err;
    }
  }

  function invalidatePlants() {
    queryClient.invalidateQueries('plants');
    queryClient.invalidateQueries(['user', 'plants', auth.user?.id]);
  }
  useEffect(() => {
    observe(send, invalidatePlants);
  }, []);

  const {
    data,
    error,
    isFetching,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery('user-plants', getPlants, {
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

  const isNotResultFound = data?.pages[0].totalCount === 0;

  console.error(data);
  return (
    <>
      <View style={{flex: 1}}>
        <CustomHeader
          left={<BackButton />}
          title={user?.name}
          right={userId === auth.user?.id && <ConfigButton />}
        />
        <FlatList
          numColumns={3}
          onEndReached={onEndReached}
          data={getFlatedArray(data)}
          onEndReachedThreshold={0.4}
          renderItem={({item}) => <Card item={item} fraction={3} />}
          ListHeaderComponent={<UserInfo user={user} />}
          ListFooterComponent={
            <>
              <LoadingScrollFooter active={!error && isFetching} />
              {error && <NetworkError retry={onEndReached} />}
              {!hasNextPage && isNotResultFound && <NotFound />}
            </>
          }
        />
      </View>
      <FooterNavigation />
    </>
  );
}

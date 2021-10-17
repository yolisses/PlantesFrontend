import React from 'react';
import {FlatList, View} from 'react-native';
import {useInfiniteQuery} from 'react-query';

import {useUser} from './useUser';
import {UserInfo} from './UserInfo';
import {ConfigButton} from './ConfigButton';

import {api} from 'api/api';
import {Card} from 'home/Card';
import {auth} from 'auth/auth';
import {BackButton} from 'common/BackButton';
import {CustomHeader} from 'common/CustomHeader';
import {FooterNavigation} from 'navigation/FooterNavigation';
import {getFlatedArray} from 'common/getFlatedArray';
import {LoadingScrollFooter} from 'common/LoadingScrollFooter';
import {NetworkError} from 'home/NetworkError';
import {SendingList} from 'send/SendingList';
import {UserWithoutItems} from './UserWithoutItems';
import {Route} from '@react-navigation/routers';
import {UserId} from 'types/User';

interface UserScreenProps {
  route: Route<'UserScreen', {userId: UserId}>;
}

export function UserScreen({route}: UserScreenProps) {
  const {userId: userIdParam} = route.params || {};
  const userId = userIdParam || auth?.user?.id;
  const {data: user} = useUser(userId);

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

  const {
    data,
    error,
    isFetching,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery(['user', 'plants', auth.user?.id], getPlants, {
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

  const someResultFound = data?.pages[0].totalCount !== 0;

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
          ListHeaderComponent={
            <>
              <UserInfo user={user} />
              {userId === auth.user?.id && <SendingList />}
            </>
          }
          ListFooterComponent={
            <>
              <LoadingScrollFooter active={!error && isFetching} />
              {error && <NetworkError retry={onEndReached} />}
              {!hasNextPage && !someResultFound && <UserWithoutItems />}
            </>
          }
        />
      </View>
      <FooterNavigation />
    </>
  );
}

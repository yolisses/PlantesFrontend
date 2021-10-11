import React, {useEffect} from 'react';
import {FlatList, View} from 'react-native';
import {useQuery, useQueryClient} from 'react-query';

import {observe} from 'mobx';
import {useObserver} from 'mobx-react-lite';

import {useUser} from './useUser';
import {UserInfo} from './UserInfo';
import {ConfigButton} from './ConfigButton';

import {api} from 'api';
import {auth} from 'auth/auth';
import {Card} from 'home/Card';
import {send} from 'send/sendings';
import {SendingList} from 'send/SendingList';
import {BackButton} from 'publish/BackButton';
import {CustomHeader} from 'publish/CustomHeader';
import {FooterNavigation} from 'navigation/FooterNavigation';

const numberOfCollums = 3;

export function UserScreen({route}) {
  const {userId: userIdParam} = route.params || {};
  const userId = userIdParam || auth.userId;
  const {data: user} = useUser(userId);

  const queryClient = useQueryClient();

  async function getPlants() {
    try {
      const res = await api.get('user-plants/' + userId);
      return res.data;
    } catch (err) {
      console.error(err.response || err);
    }
  }

  const {data} = useQuery(['user', 'plants', userId], getPlants);

  function renderItem({item}) {
    return <Card item={item} fraction={3} />;
  }

  function keyExtractor(item) {
    return item?._id;
  }

  function invalidatePlants() {
    queryClient.invalidateQueries('plants');
    queryClient.invalidateQueries(['user', 'plants', auth.userId]);
  }

  useEffect(() => {
    observe(send, invalidatePlants);
  }, []);

  return useObserver(() => (
    <>
      <View style={{flex: 1}}>
        <CustomHeader
          left={<BackButton />}
          title={user?.name}
          right={userId === auth.userId && <ConfigButton />}
        />
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          numColumns={numberOfCollums}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={
            <>
              <UserInfo user={user} />
              {userId === auth.userId && <SendingList />}
            </>
          }
        />
      </View>
      <FooterNavigation />
    </>
  ));
}

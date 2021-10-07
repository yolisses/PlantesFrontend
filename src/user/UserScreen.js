import {FlatList, View} from 'react-native';
import React, {useEffect, useState} from 'react';

import {UserInfo} from './UserInfo';
import {ConfigButton} from './ConfigButton';

import {api} from 'api';
import {auth} from 'auth/auth';
import {Card} from 'home/Card';
import {BackButton} from 'publish/BackButton';
import {CustomHeader} from 'publish/CustomHeader';
import {useUserById} from 'common/UsersByIdContext';
import {FooterNavigation} from 'navigation/FooterNavigation';
import {SendingList} from 'send/SendingList';
import {useObserver} from 'mobx-react-lite';
import {observe} from 'mobx';
import {send} from 'send/sendings';

const numberOfCollums = 3;

export function UserScreen({route}) {
  const [plants, setPlants] = useState();

  const {getUserById} = useUserById();

  const {userId: userIdParam} = route.params || {};
  const userId = userIdParam || auth.userId;
  const user = getUserById(userId);

  async function getPlants() {
    const res = await api.get('user-plants/' + userId);
    setPlants(res.data);
  }

  function renderItem({item}) {
    return <Card item={item} fraction={3} />;
  }

  function keyExtractor(item) {
    return item?._id;
  }

  async function getPlants() {
    const res = await api.get('user-plants/' + userId);
    setPlants(res.data);
  }

  useEffect(() => {
    observe(send, getPlants);
    getPlants();
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
          data={plants}
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

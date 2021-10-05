import {FlatList, Text} from 'react-native';
import React, {useEffect, useState} from 'react';

import {UserInfo} from './UserInfo';
import {SendingCard} from './SendingCard';
import {ConfigButton} from './ConfigButton';

import {api} from 'api';
import {auth} from 'auth/auth';
import {Card} from 'home/Card';
import {BackButton} from 'publish/BackButton';
import {CustomHeader} from 'publish/CustomHeader';
import {useUserById} from 'common/UsersByIdContext';
import {FooterNavigationLayout} from 'navigation/FooterNavigationLayout';
import {removeFinisheds, send} from 'send/sendings';

import {useObserver} from 'mobx-react-lite';

const numberOfCollums = 3;

export function UserScreen({route}) {
  const [plants, setPlants] = useState();

  const {getUserById} = useUserById();

  const {userId: userIdParam} = route.params || {};
  const userId = userIdParam || auth.userId;
  const user = getUserById(userId);

  function renderItem({item}) {
    return <Card item={item} fraction={3} />;
  }
  function renderSendingItem({item}) {
    return (
      <SendingCard
        image={item?.localData?.images[0]}
        sent={item?.sent}
        fraction={3}
      />
    );
  }

  async function getPlants() {
    const res = await api.get('user-plants/' + userId);
    setPlants(res.data);
    removeFinisheds();
  }

  useEffect(() => {
    getPlants();
  }, []);

  console.error(send.sendings);

  function ListHeaderComponent() {
    if (userId === auth.userId) {
      return (
        <FlatList
          numColumns={numberOfCollums}
          data={Object.values(send.sendings)}
          renderItem={renderSendingItem}
          keyExtractor={sendingKeyExtractor}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={<UserInfo user={user} />}
        />
      );
    } else {
      return <UserInfo user={user} />;
    }
  }

  function keyExtractor(item) {
    return item?._id;
  }

  function sendingKeyExtractor(item) {
    return item?.plantId;
  }

  return useObserver(() => (
    <>
      <FooterNavigationLayout>
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
          ListHeaderComponent={ListHeaderComponent}
        />
      </FooterNavigationLayout>
    </>
  ));
}

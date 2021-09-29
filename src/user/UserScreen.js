import {Button, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';

import {api} from 'api';
import {Card} from 'home/Card';
import {useSending} from 'send/SendingContext';
import {FooterNavigationLayout} from 'navigation/FooterNavigationLayout';

import {UserInfo} from './UserInfo';
import {SendingCard} from './SendingCard';
import {auth} from 'auth/auth';
import {signOut} from 'auth/signOut';

const numberOfCollums = 3;

export function UserScreen({route}) {
  const [user, setUser] = useState();
  const [plants, setPlants] = useState();

  const {userId} = route.params;

  const {sendings, removeFinisheds} = useSending();

  function renderItem({item}) {
    return <Card item={item} fraction={3} />;
  }
  function renderSendingItem({item}) {
    return <SendingCard item={item} fraction={3} />;
  }

  async function getUser() {
    const res = await api.get('user/' + userId);
    setUser(res.data);
  }

  async function getPlants() {
    const res = await api.get('userplants/' + userId);
    setPlants(res.data);
    removeFinisheds();
  }

  useEffect(() => {
    getUser();
    getPlants();
  }, []);

  function ListHeaderComponent() {
    if (userId === auth.userId) {
      return (
        <>
          <Button title="sair" onPress={signOut} />
          <FlatList
            numColumns={numberOfCollums}
            data={Object.values(sendings)}
            renderItem={renderSendingItem}
            keyExtractor={sendingKeyExtractor}
            ListHeaderComponent={<UserInfo user={user} />}
          />
        </>
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

  return (
    <FooterNavigationLayout selected="Home">
      <FlatList
        data={plants}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        numColumns={numberOfCollums}
        ListHeaderComponent={ListHeaderComponent}
      />
    </FooterNavigationLayout>
  );
}

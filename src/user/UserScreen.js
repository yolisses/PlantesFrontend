import {api} from 'api';
import {useUserContext} from 'auth/userContext';
import {Card} from 'home/Card';
import {FooterNavigationLayout} from 'navigation/FooterNavigationLayout';
import React, {useEffect, useState} from 'react';
import {Text} from 'react-native';
import {FlatList} from 'react-native';
import {useSending} from 'send/SendingContext';
import {SendingCard} from './SendingCard';
import {UserInfo} from './UserInfo';

const numberOfCollums = 3;

export function UserScreen({route}) {
  const [user, setUser] = useState();
  const [plants, setPlants] = useState();

  const {userId} = route.params;

  const {sendings} = useSending();

  const {userId: currentUserId} = useUserContext();

  function renderItem({item}) {
    return <Card item={item} fraction={3} />;
  }
  function renderSendingItem({item}) {
    console.error(item);
    return <SendingCard item={item} fraction={3} />;
  }

  async function getUser() {
    const res = await api.get('user/' + userId);
    setUser(res.data);
  }

  async function getPlants() {
    const res = await api.get('userplants/' + userId);
    setPlants(res.data);
  }

  useEffect(() => {
    getUser();
    getPlants();
  }, []);

  function ListHeaderComponent() {
    if (userId === currentUserId) {
      return (
        <FlatList
          data={Object.values(sendings)}
          numColumns={numberOfCollums}
          renderItem={renderSendingItem}
          ListHeaderComponent={<UserInfo user={user} />}
        />
      );
    } else {
      return <UserInfo user={user} />;
    }
  }

  return (
    <FooterNavigationLayout selected="Home">
      <FlatList
        data={plants}
        renderItem={renderItem}
        numColumns={numberOfCollums}
        ListHeaderComponent={ListHeaderComponent}
      />
    </FooterNavigationLayout>
  );
}

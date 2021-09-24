import {api} from 'api';
import {Card} from 'home/Card';
import {FooterNavigationLayout} from 'navigation/FooterNavigationLayout';
import React, {useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
import {UserInfo} from './UserInfo';

const numberOfCollums = 3;

export function UserScreen({route}) {
  const [user, setUser] = useState();
  const [plants, setPlants] = useState();

  const {userId} = route.params;

  console.error(userId);

  function renderItem({item}) {
    return <Card item={item} fraction={3} />;
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
    return (
      <View>
        <UserInfo user={user} />
      </View>
    );
  }

  return (
    <FooterNavigationLayout>
      <FlatList
        data={plants}
        renderItem={renderItem}
        numColumns={numberOfCollums}
        ListHeaderComponent={ListHeaderComponent}
      />
    </FooterNavigationLayout>
  );
}

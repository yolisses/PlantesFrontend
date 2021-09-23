import {api} from 'api';
import {Card} from 'home/Card';
import {FooterNavigationLayout} from 'navigation/FooterNavigationLayout';
import React, {useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
import {UserInfo} from './UserInfo';

const numberOfCollums = 3;

export function UserScreen() {
  const [user, setUser] = useState();
  const [plants, setPlants] = useState();

  function renderItem({item}) {
    return <Card item={item} fraction={3} />;
  }

  async function getUser() {
    const res = await api.get('user/614c85e97244c7e73c35ca5c');
    setUser(res.data);
  }

  async function getPlants() {
    const res = await api.get('userplants/614c85e97244c7e73c35ca5c');
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

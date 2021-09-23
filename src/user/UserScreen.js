import {api} from 'api';
import {SquareImage} from 'common/SquareImage';
import {FooterNavigationLayout} from 'navigation/FooterNavigationLayout';
import React, {Fragment, useEffect, useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import {UserInfo} from './UserInfo';

const numberOfCollums = 3;

export function UserScreen() {
  const [user, setUser] = useState();

  function renderItem({item}) {
    return <Text>{JSON.stringify(item)}</Text>;
  }

  async function getUser() {
    const res = await api.get('user/614c85e97244c7e73c35ca5c');
    setUser(res.data);
  }

  useEffect(() => {
    getUser();
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
        renderItem={renderItem}
        numColumns={numberOfCollums}
        ListHeaderComponent={ListHeaderComponent}
      />
    </FooterNavigationLayout>
  );
}

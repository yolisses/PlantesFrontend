import {FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';

import {UserInfo} from './UserInfo';
import {SendingCard} from './SendingCard';
import {ConfigButton} from './ConfigButton';

import {api} from 'api';
import {auth} from 'auth/auth';
import {Card} from 'home/Card';
import {BackButton} from 'publish/BackButton';
import {useSending} from 'send/SendingContext';
import {CustomHeader} from 'publish/CustomHeader';
import {useUserById} from 'common/UsersByIdContext';
import {FooterNavigationLayout} from 'navigation/FooterNavigationLayout';

const numberOfCollums = 3;

export function UserScreen({route}) {
  const [plants, setPlants] = useState();

  const {getUserById} = useUserById();
  const user = getUserById(route.params.userId);

  const {userId} = route.params;

  const {sendings, removeFinisheds} = useSending();

  function renderItem({item}) {
    return <Card item={item} fraction={3} />;
  }
  function renderSendingItem({item}) {
    return <SendingCard item={item} fraction={3} />;
  }

  async function getPlants() {
    const res = await api.get('user-plants/' + userId);
    setPlants(res.data);
    removeFinisheds();
  }

  useEffect(() => {
    getPlants();
  }, []);

  function ListHeaderComponent() {
    if (userId === auth.userId) {
      return (
        <>
          <FlatList
            numColumns={numberOfCollums}
            data={Object.values(sendings)}
            renderItem={renderSendingItem}
            keyExtractor={sendingKeyExtractor}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={
              <>
                <UserInfo user={user} />
              </>
            }
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
  );
}

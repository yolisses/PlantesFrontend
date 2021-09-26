import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';

import {Card} from 'home/Card';
import {CustomHeader} from 'publish/CustomHeader';
import {UserRoundImage} from 'common/UserRoundImage';
import {CardsListLoading} from 'home/CardsListLoading';
import {FooterNavigationLayout} from 'navigation/FooterNavigationLayout';
import {api} from 'api/api';
import {useUserContext} from 'auth/userContext';

export function HomeScreen() {
  const [plants, setPlants] = useState(null);

  async function getPlants() {
    try {
      const res = await api.get('/plants');
      setPlants(res.data);
    } catch (err) {
      console.error(err);
    }
  }

  const {user} = useUserContext();

  useEffect(() => {
    getPlants();
  }, []);

  return (
    <>
      <CustomHeader
        title="Plantei"
        right={
          <UserRoundImage size={40} userId={user?._id} image={user?.image} />
        }
      />
      {!plants ? (
        <CardsListLoading />
      ) : (
        <FlatList
          numColumns={2}
          data={plants}
          renderItem={({item}) => <Card item={item} />}
        />
      )}
    </>
  );
}

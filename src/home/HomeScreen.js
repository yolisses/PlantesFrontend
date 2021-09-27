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
  const [page, setPage] = useState(1);
  const [plants, setPlants] = useState([]);
  const [ended, setEnded] = useState(false);
  const [loading, setLoading] = useState(false);

  const getPlants = async () => {
    if (loading || ended) {
      return;
    }
    setLoading(true);
    try {
      const res = await api.get('/plants/' + page);
      if (res.data.length === 0) {
        setEnded(true);
      }
      setPlants([...plants, ...res.data]);
      setPage(page + 1);
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  };

  const {user} = useUserContext();

  useEffect(() => {
    getPlants();
  }, []);

  return (
    <FooterNavigationLayout selected={'Home'}>
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
          onEndReached={getPlants}
          onEndReachedThreshold={0.1}
          renderItem={({item}) => <Card item={item} />}
        />
      )}
    </FooterNavigationLayout>
  );
}

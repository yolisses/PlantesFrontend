import React, {useState} from 'react';
import {FlatList} from 'react-native';

import {Card} from 'store/Card';
import {CustomHeader} from 'publish/CustomHeader';
import {UserRoundImage} from 'common/UserRoundImage';
import {CardsListLoading} from 'store/CardsListLoading';
import {FooterNavigationLayout} from 'navigation/FooterNavigationLayout';

export function StoreScreen() {
  const [plants, setPlants] = useState([]);

  return (
    <FooterNavigationLayout selected={'Home'}>
      <CustomHeader title="Plantei" right={<UserRoundImage size={40} />} />
      {!plants ? (
        <CardsListLoading />
      ) : (
        <FlatList
          numColumns={2}
          data={plants}
          renderItem={({item}) => <Card item={item} />}
        />
      )}
    </FooterNavigationLayout>
  );
}

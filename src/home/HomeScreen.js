import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';

import {api} from 'api';
import {Card} from 'home/Card';
import {useUserContext} from 'auth/userContext';
import {CustomHeader} from 'publish/CustomHeader';
import {UserRoundImage} from 'common/UserRoundImage';
import {CardsListLoading} from 'home/CardsListLoading';
import {AvailabilityButtons} from 'home/AvailabilityButtons';
import {createHidableHeader} from 'common/createHidableHeader';
import {FooterNavigationLayout} from 'navigation/FooterNavigationLayout';
import {StyleSheet} from 'react-native';
import {SearchButton} from './SearchButton';
import {View} from 'react-native';
import {SearchingField} from './SearchingField';

export function HomeScreen() {
  const [page, setPage] = useState(0);
  const [plants, setPlants] = useState([]);
  const [ended, setEnded] = useState(false);
  const [loading, setLoading] = useState(false);

  const [searching, setSearching] = useState(false);

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

  const headerHeight = 100;

  const {onScroll, HidableHeader} = createHidableHeader({
    headerHeight,
    unsafeArea: 25,
    threshold: headerHeight,
  });

  useEffect(() => {
    getPlants();
  }, []);

  function onSearchPress() {
    setSearching(true);
  }
  function onCloseSearchPress() {
    setSearching(false);
  }

  return (
    <FooterNavigationLayout selected={'Home'}>
      <View style={styles.topWrapper}>
        {!searching ? (
          <CustomHeader
            title="Plantei"
            style={styles.header}
            right={
              <View style={styles.rightWrapper}>
                <View style={styles.spacer}>
                  <SearchButton onPress={onSearchPress} />
                </View>
                <UserRoundImage
                  size={40}
                  userId={user?._id}
                  image={user?.image}
                />
              </View>
            }
          />
        ) : (
          <SearchingField onClosePress={onCloseSearchPress} />
        )}
      </View>
      <HidableHeader>
        <AvailabilityButtons />
      </HidableHeader>
      {!plants ? (
        <CardsListLoading />
      ) : (
        <FlatList
          data={plants}
          numColumns={2}
          onScroll={onScroll}
          onEndReached={getPlants}
          onEndReachedThreshold={0.1}
          renderItem={({item}) => <Card item={item} />}
          contentContainerStyle={{paddingTop: headerHeight}}
        />
      )}
    </FooterNavigationLayout>
  );
}

const styles = StyleSheet.create({
  topWrapper: {
    zIndex: 20,
    width: '100%',
    position: 'absolute',
    backgroundColor: 'white',
  },
  header: {
    elevation: 0,
  },
  rightWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  spacer: {
    marginRight: 20,
  },
});

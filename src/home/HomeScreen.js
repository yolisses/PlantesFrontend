import {FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';

import {api} from 'api';
import {Card} from 'home/Card';
import {CardsListLoading} from 'home/CardsListLoading';
import {SearchCustomHeader} from 'search/SearchCustomHeader';
import {createHidableHeader} from 'common/createHidableHeader';
import {FooterNavigationLayout} from 'navigation/FooterNavigationLayout';
import {useSearch} from 'search/SearchContext';

export function HomeScreen() {
  const [page, setPage] = useState(0);
  const [plants, setPlants] = useState([]);
  const [ended, setEnded] = useState(false);
  const [loading, setLoading] = useState(false);

  const {sell, swap, donate} = useSearch();

  const getPlants = async () => {
    if (loading || ended) {
      return;
    }
    setLoading(true);
    try {
      const res = await api.get('/plants/' + page, {params});
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

  const {onScroll, HidableHeader} = createHidableHeader({
    headerHeight: 60,
    unsafeArea: 25,
  });

  useEffect(() => {
    getPlants();
  }, []);

  return (
    <FooterNavigationLayout selected={'Home'}>
      <SearchCustomHeader HidableHeader={HidableHeader} />
      {!plants ? (
        <CardsListLoading />
      ) : (
        <FlatList
          data={plants}
          numColumns={2}
          onScroll={onScroll}
          onEndReached={getPlants}
          onEndReachedThreshold={0.5}
          contentContainerStyle={{paddingTop: 100}}
          renderItem={({item}) => <Card item={item} />}
        />
      )}
    </FooterNavigationLayout>
  );
}

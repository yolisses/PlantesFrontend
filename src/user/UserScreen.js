import React, {useState, useEffect, useRef} from 'react';
import {Animated, FlatList, StyleSheet} from 'react-native';
import {FooterNavigationLayout} from 'navigation/FooterNavigationLayout';
import {api} from 'api';
import {CardsListLoading} from 'store/CardsListLoading';
import {CardsListFooter} from 'store/CardsListFooter';
import {Card} from 'store/Card';
import {UserInfo} from './UserInfo';
import {TabSelector} from './TabSelector';
import {useNavigation} from '@react-navigation/core';

export function UserScreen() {
  const [starting, setStarting] = useState(true);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(Infinity);

  const navigation = useNavigation();

  navigation.setOptions({
    headerTitle: 'maria',
  });

  const limit = 40;

  const pageInitialIndex = (page - 1) * limit;
  const remainItems = pageInitialIndex < totalCount;

  async function getCards() {
    if (loading || !remainItems) {
      return;
    }
    setLoading(true);

    try {
      const res = await api.get(`/cards?_page=${page}&_limit=${limit}`);
      setData([...data, ...res.data]);
      setLoading(false);
      setPage(page + 1);
      setTotalCount(res.headers['x-total-count']);
      setStarting(false);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    getCards();
  }, []);

  const renderItem = ({item}) => <Card key={item.id} item={item} />;

  const scrollY = useRef(new Animated.Value(0));

  const translateY = scrollY.current.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -1],
  });

  const handleScroll = Animated.event(
    [
      {
        nativeEvent: {
          contentOffset: {y: scrollY.current},
        },
      },
    ],
    {
      useNativeDriver: true,
    },
  );

  if (starting) {
    return (
      <FooterNavigationLayout selected={'Home'}>
        <CardsListLoading />
      </FooterNavigationLayout>
    );
  }

  return (
    <FooterNavigationLayout selected={'Home'}>
      <Animated.View style={[styles.animatedView, {transform: [{translateY}]}]}>
        <UserInfo />
      </Animated.View>
      <Animated.FlatList
        data={data}
        ListHeaderComponent={() => <TabSelector />}
        stickyHeaderIndices={[0]}
        numColumns={2}
        contentContainerStyle={{paddingTop: 200}}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        nestedScrollEnabled
        onScroll={handleScroll}
        onEndReached={getCards}
        showsVerticalScrollIndicator={false}
        onEndReachedThreshold={0.9}
        ListFooterComponent={() => (remainItems ? <CardsListFooter /> : null)}
      />
    </FooterNavigationLayout>
  );
}

const styles = StyleSheet.create({
  animatedView: {
    position: 'absolute',
    left: 0,
    right: 0,
    width: '100%',
    zIndex: 1,
  },
});

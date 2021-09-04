import React, {useState, useEffect, useRef} from 'react';
import {Animated, Dimensions} from 'react-native';
import {FooterNavigationLayout} from 'navigation/FooterNavigationLayout';
import {api} from 'api';
import {CardsListLoading} from 'store/CardsListLoading';
import {CardsListFooter} from 'store/CardsListFooter';
import {Card} from 'store/Card';
import {useNavigation} from '@react-navigation/core';
import {ScrollView} from 'react-native';
import {AnimatedUserInfo} from './AnimatedUserInfo';
import {AnimatedTabSelector} from './AnimatedTabSelector';

const userInfoHeight = 180;
const {width} = Dimensions.get('window');

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
      <AnimatedUserInfo scrollY={scrollY} userInfoHeight={userInfoHeight} />
      <AnimatedTabSelector scrollY={scrollY} userInfoHeight={userInfoHeight} />
      <ScrollView
        horizontal={true}
        snapToInterval={width}
        showsHorizontalScrollIndicator={false}
        disableIntervalMomentum>
        <Animated.FlatList
          data={data}
          numColumns={2}
          contentContainerStyle={{paddingTop: userInfoHeight}}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          nestedScrollEnabled
          onScroll={handleScroll}
          onEndReached={getCards}
          showsVerticalScrollIndicator={false}
          onEndReachedThreshold={0.9}
          ListFooterComponent={() => (remainItems ? <CardsListFooter /> : null)}
        />
        <Animated.FlatList
          data={data}
          numColumns={2}
          contentContainerStyle={{paddingTop: userInfoHeight}}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          nestedScrollEnabled
          onScroll={handleScroll}
          onEndReached={getCards}
          showsVerticalScrollIndicator={false}
          onEndReachedThreshold={0.9}
          ListFooterComponent={() => (remainItems ? <CardsListFooter /> : null)}
        />
        <Animated.FlatList
          data={data}
          numColumns={2}
          contentContainerStyle={{paddingTop: userInfoHeight}}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          nestedScrollEnabled
          onScroll={handleScroll}
          onEndReached={getCards}
          showsVerticalScrollIndicator={false}
          onEndReachedThreshold={0.9}
          ListFooterComponent={() => (remainItems ? <CardsListFooter /> : null)}
        />
      </ScrollView>
    </FooterNavigationLayout>
  );
}

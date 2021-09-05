import React, {useCallback, useRef, useState} from 'react';
import {Dimensions, FlatList, SectionList, StyleSheet} from 'react-native';
import {FooterNavigationLayout} from 'navigation/FooterNavigationLayout';
import {CardsListLoading} from 'store/CardsListLoading';
import {Card} from 'store/Card';
import {useNavigation} from '@react-navigation/core';
import {InfiniteScroll} from '../common/InfiniteScroll';
import {CardsListFooter} from '../store/CardsListFooter';
import {UserInfo} from './UserInfo';
import {TabSelector} from './TabSelector';
import {
  faImages,
  faSeedling,
  faThumbsUp,
} from '@fortawesome/free-solid-svg-icons';

const {width} = Dimensions.get('window');

export function UserScreen() {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(0);

  navigation.setOptions({
    headerTitle: 'maria',
  });

  const categories = [
    {
      name: 'plants',
      icon: faSeedling,
    },
    {
      name: 'posts',
      icon: faImages,
    },
    {
      name: 'likes',
      icon: faThumbsUp,
    },
  ];

  const scrollRef = useRef();

  const onScroll = e => {
    setSelected(Math.round(e.nativeEvent.contentOffset.x / width));
  };

  const scrollTo = useCallback(
    index => {
      scrollRef.current
        .getNativeScrollRef()
        .scrollTo({x: index * width, animated: true});
    },
    [scrollRef],
  );

  return (
    <FooterNavigationLayout selected={'Home'}>
      <SectionList
        sections={[
          {
            id: 0,
            data: [],
          },
          {
            id: 1,
            data: ['content'],
          },
        ]}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => item + index}
        renderItem={() => {
          return (
            <FlatList
              horizontal
              ref={scrollRef}
              data={categories}
              onScroll={onScroll}
              snapToInterval={width}
              disableIntervalMomentum
              keyExtractor={category => category.name}
              showsHorizontalScrollIndicator={false}
              renderItem={({item: category, index}) => {
                return (
                  <InfiniteScroll
                    numColumns={2}
                    key={category.name}
                    loadingFooter={<CardsListFooter />}
                    selected={selected === index}
                    startingComponent={<CardsListLoading />}
                    contentContainerStyle={styles.contentContainer}
                    renderItem={({item}) => <Card key={item.id} item={item} />}
                    getUrl={(page, limit) =>
                      `/cards?_page=${page}&_limit=${limit}`
                    }
                  />
                );
              }}
            />
          );
        }}
        renderSectionHeader={({section: {id}}) =>
          id === 0 ? (
            <UserInfo />
          ) : (
            <TabSelector
              scrollTo={scrollTo}
              selected={selected}
              categories={categories}
            />
          )
        }
        stickyHeaderIndices={[1]}
        stickySectionHeadersEnabled
      />
    </FooterNavigationLayout>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    width,
  },
});

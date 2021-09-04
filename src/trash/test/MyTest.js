import React, {useRef} from 'react';
import {Animated, SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import Header from './Header';
import ListItem from './ListItem';
import {generateData} from './data';

const headerHeight = 100;

export function MyTest() {
  const data = generateData(50);

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

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View style={[styles.header, {transform: [{translateY}]}]}>
        <Header {...{headerHeight}} />
      </Animated.View>
      <Animated.FlatList
        contentContainerStyle={{paddingTop: headerHeight}}
        onScroll={handleScroll}
        ListHeaderComponent={<Header {...{headerHeight}} />}
        stickyHeaderIndices={[0]}
        data={data}
        renderItem={ListItem}
        keyExtractor={(item, index) => `list-item-${index}-${item.color}`}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    backgroundColor: '#1c1c1c',
    left: 0,
    right: 0,
    width: '100%',
    zIndex: 1,
  },
  subHeader: {
    height: headerHeight / 2,
    width: '100%',
    paddingHorizontal: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
});

import React from 'react';
import {Dimensions, FlatList, StyleSheet, View} from 'react-native';

const {width} = Dimensions.get('window');

export function SwipeIndicator({images, selected}) {
  const renderItem = ({item, index}) =>
    selected === index ? (
      <View style={styles.active} key={item} />
    ) : (
      <View style={styles.inactive} key={item} />
    );

  return (
    <View style={styles.container}>
      {images.length > 1 ? (
        <FlatList
          horizontal={true}
          data={images}
          renderItem={renderItem}
          keyExtractor={item => item.image}
          showsHorizontalScrollIndicator={false}
          decelerationRate={0.95}
          getItemLayout={(data, index) => ({
            length: width / 5.8,
            offset: (width / 5.8) * index,
            index,
          })}
        />
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    width: '100%',
  },
  inactive: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'gray',
    backgroundColor: '#eee',
    borderRadius: 100,
    padding: 3,
    margin: 2.5,
  },
  active: {
    borderRadius: 100,
    padding: 4,
    margin: 2.5,
    aspectRatio: 1,
    backgroundColor: 'gray',
  },
});

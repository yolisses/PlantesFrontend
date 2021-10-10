import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {width} from 'utils/width';

function getRandomValue() {
  return Math.max(Math.floor(Math.random() * 10), 4);
}

function getRandomColor() {
  return '#b' + getRandomValue() + getRandomValue() + getRandomValue();
}

function Card({item}) {
  return (
    <Text style={[styles.card, {backgroundColor: getRandomColor()}]}>
      {item}
    </Text>
  );
}

export function Dev() {
  const data = [...Array(5)];

  return (
    <View>
      <FlatList
        data={data}
        renderItem={({index}) => <Card item={index} />}
        ListHeaderComponent={<Card item={'pre'} />}
        ListHeaderComponentStyle={styles.pre}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width,
    height: width,
    fontSize: 100,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  pre: {
    position: 'absolute',
  },
});

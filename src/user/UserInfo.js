import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';

export function UserInfo({user}) {
  return (
    <View style={styles.container}>
      <View style={styles.imageNameWrapper}>
        <FastImage style={styles.image} source={{uri: user?.image}} />
        <Text style={styles.text}>{user?.name}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  imageNameWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  image: {
    width: 70,
    aspectRatio: 1,
    borderRadius: 100,
  },
});

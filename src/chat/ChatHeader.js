import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';

export function ChatHeader({item}) {
  const {navigate} = useNavigation();
  const onPress = () => {
    navigate('UserScreen');
  };

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.6}
      onPress={onPress}>
      <FastImage
        style={styles.image}
        source={{
          uri: item?.image,
        }}
      />
      <Text style={styles.name}>{item?.name}</Text>
    </TouchableOpacity>
  );
}

const size = 38;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    paddingRight: 20,
  },
  image: {
    borderRadius: 100,
    backgroundColor: '#ccc',
    width: size,
    height: size,
  },
  name: {
    fontSize: 18,
    marginLeft: 5,
  },
});

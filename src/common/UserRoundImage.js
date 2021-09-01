import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';

export function UserRoundImage({size, style}) {
  const {navigate} = useNavigation();

  size = size || 30;

  return (
    <TouchableOpacity onPress={() => navigate('UserPage')} activeOpacity={0.8}>
      <FastImage
        style={[styles.image, {width: size, height: size}, style]}
        source={{uri: 'https://avatars.githubusercontent.com/yowlisses'}}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  image: {
    borderRadius: 100,
  },
});

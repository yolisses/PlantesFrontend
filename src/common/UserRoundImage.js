import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';

export function UserRoundImage({userId, image, size, style}) {
  const {navigate} = useNavigation();
  size = size || 35;

  return (
    <TouchableOpacity
      onPress={() => navigate('UserScreen', {userId})}
      activeOpacity={0.8}>
      <FastImage
        style={[styles.image, {width: size, height: size}, style]}
        source={{uri: image}}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  image: {
    borderRadius: 100,
    backgroundColor: '#ddd',
  },
});

import {useNavigation} from '@react-navigation/native';
import {auth} from 'auth/auth';
import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';

export function UserRoundImage({userId, image, size, style, ownUser}) {
  const {navigate} = useNavigation();
  size = size || 35;

  function onPress() {
    if (ownUser) {
      navigate('UserScreen', {userId: auth.user?.id});
    } else if (userId) {
      navigate('Profile', {userId});
    }
  }

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
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

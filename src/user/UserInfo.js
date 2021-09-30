import React from 'react';
import {StyleSheet, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {EditProfileButton} from 'profile/EditProfileButton';
import {UserDescription} from './UserDescription';
import {auth} from 'auth/auth';

export function UserInfo({user}) {
  return (
    <View style={styles.container}>
      <View style={styles.imageNameWrapper}>
        <FastImage style={styles.image} source={{uri: user?.image}} />
      </View>
      {!!user && <UserDescription text={user?.description} />}
      {user?._id === auth.userId && <EditProfileButton />}
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
  image: {
    width: 70,
    aspectRatio: 1,
    borderRadius: 100,
  },
});

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {EditProfileButton} from 'profile/EditProfileButton';
import {UserDescription} from './UserDescription';
import {auth} from 'auth/auth';
import moment from 'moment/min/moment-with-locales';
import {getUserLocationString} from 'location/getUserLocationString';

export function UserInfo({user}) {
  return (
    <View style={styles.container}>
      <View style={styles.imageNameWrapper}>
        <FastImage style={styles.image} source={{uri: user?.image}} />
        <View style={styles.dataWrapper}>
          {!!user && (
            <Text style={styles.location}>{getUserLocationString(user)}</Text>
          )}
          {user?.createdAt ? (
            <Text style={styles.location}>
              No Plantes desde {moment(user.createdAt).format('LL')}
            </Text>
          ) : null}
        </View>
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
  location: {
    paddingLeft: 10,
    paddingVertical: 4,
    flexWrap: 'wrap',
    width: '100%',
    fontSize: 18,
  },
  dataWrapper: {
    flex: 1,
  },
});

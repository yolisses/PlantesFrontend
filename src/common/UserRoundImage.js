import {useNavigation} from '@react-navigation/native';
import {api} from 'api';
import React, {useEffect, useState} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';

export function UserRoundImage({id, size, style}) {
  const {navigate} = useNavigation();
  const [user, setUser] = useState();

  size = size || 30;

  async function getUser() {
    try {
      const res = await api.get('/user/' + id);
      setUser(res.data);
    } catch (err) {
      // console.error(err);
    }
  }

  useEffect(() => {
    getUser();
  }, []);

  return (
    <TouchableOpacity
      onPress={() => navigate('UserScreen')}
      activeOpacity={0.8}>
      <FastImage
        style={[styles.image, {width: size, height: size}, style]}
        source={{uri: user?.image}}
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

import {api} from 'api/api';
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';

export function UserLink(userId) {
  const [user, setUser] = useState();

  async function getUser() {
    const res = await api.get('/user/614c85e97244c7e73c35ca5c');
    setUser(res.data);
  }

  useEffect(() => {
    getUser();
  }, []);

  if (!user) {
    return null;
  }

  return (
    <View style={styles.container}>
      <FastImage style={styles.image} source={{uri: user?.image}} />
      <Text style={styles.name}>{user?.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
    alignItems: 'center',
    flexDirection: 'row',
  },
  image: {
    width: 40,
    aspectRatio: 1,
    marginRight: 10,
    borderRadius: 100,
    backgroundColor: '#ddd',
  },
  name: {
    fontSize: 18,
  },
});

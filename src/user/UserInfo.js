import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {api} from 'api';

export function UserInfo({item}) {
  const [user, setUser] = useState(null);

  async function getUser() {
    const res = await api.get('/users/11');
    setUser(res.data);
  }
  useEffect(() => {
    getUser();
  }, []);

  return (
    <View>
      <View style={styles.imageNameWrapper}>
        <FastImage style={styles.image} source={{uri: user?.image}} />
        <Text style={styles.text}>{user?.name}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
    width: 100,
    aspectRatio: 1,
    borderRadius: 100,
  },
});

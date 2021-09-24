import {api} from 'api/api';
import {UserRoundImage} from 'common/UserRoundImage';
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';

export function UserLink({id}) {
  const [user, setUser] = useState();

  async function getUser() {
    try {
      const res = await api.get('/user/' + id);
      setUser(res.data);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    getUser();
  }, []);

  if (!user) {
    return null;
  }

  return (
    <View style={styles.container}>
      <UserRoundImage
        style={styles.image}
        size={40}
        userId={user?._id}
        image={user?.image}
      />
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
    marginRight: 10,
  },
  name: {
    fontSize: 18,
  },
});

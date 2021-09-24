import {UserRoundImage} from 'common/UserRoundImage';
import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {View} from 'react-native';
import {useUser} from './useUser';

export function UserImageAndName({id}) {
  const user = useUser(id);

  return (
    <View style={styles.container}>
      <UserRoundImage image={user?.image} style={styles.image} userId={id} />
      <Text style={styles.name}>{user?.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    marginRight: 10,
  },
  name: {
    fontSize: 18,
  },
});

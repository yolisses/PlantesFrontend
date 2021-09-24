import {UserRoundImage} from 'common/UserRoundImage';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useUser} from 'user/useUser';

export function UserLink({id}) {
  const user = useUser(id);

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

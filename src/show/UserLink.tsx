import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {UserRoundImage} from 'common/UserRoundImage';
import {getUserLocationString} from 'location/getUserLocationString';

export function UserLink({user}) {
  return (
    <View style={styles.container}>
      <UserRoundImage
        style={styles.image}
        size={40}
        userId={user?._id}
        image={user?.image}
      />
      <View>
        {!!user?.name && <Text style={styles.name}>{user?.name}</Text>}
        <Text style={styles.local}>{getUserLocationString(user)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 8,
    alignItems: 'center',
    flexDirection: 'row',
  },
  image: {
    marginRight: 10,
  },
  name: {
    fontSize: 18,
  },
  local: {
    fontSize: 16,
    color: 'gray',
  },
});

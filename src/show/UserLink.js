import {api} from 'api';
import {UserRoundImage} from 'common/UserRoundImage';
import {locationNameToString} from 'location/locationNameToString';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useQuery} from 'react-query';

export function UserLink({id, user}) {
  // async function getUser() {
  //   return await api.get('/user/' + id);
  // }

  // const {data: user} = useQuery({userId: id}, getUser);

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
        {!!user?.locationName && (
          <Text style={styles.local}>
            {locationNameToString(user.locationName)}
          </Text>
        )}
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

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {UserRoundImage} from 'common/UserRoundImage';

export function UserIdentifier({item}) {
  return (
    <View style={styles.topWrapper}>
      <UserRoundImage size={40} item={item} />
      <View>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.subtitle}>dois segundos atras</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  topWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
  },
  name: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitle: {
    marginLeft: 5,
    color: 'gray',
    fontSize: 16,
  },
});

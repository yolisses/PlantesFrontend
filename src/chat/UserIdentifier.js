import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {UserRoundImage} from '../UserRoundImage';

export function UserIdentifier() {
  return (
    <View style={styles.topWrapper}>
      <UserRoundImage size={40} />
      <View>
        <Text style={styles.name}>Ulisses</Text>
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

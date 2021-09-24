import {UserRoundImage} from 'common/UserRoundImage';
import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {View} from 'react-native';

export function UserImageAndName({image, name}) {
  return (
    <View style={styles.container}>
      <UserRoundImage image={image} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
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

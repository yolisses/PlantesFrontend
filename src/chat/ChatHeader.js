import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

export function ChatHeader({imageUri, name}) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: imageUri,
        }}
      />
      <Text style={styles.name}>{name}</Text>
    </View>
  );
}

const size = 38;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
  },
  image: {
    borderRadius: 100,
    backgroundColor: '#ccc',
    width: size,
    height: size,
  },
  name: {
    fontSize: 18,
    marginLeft: 5,
  },
});

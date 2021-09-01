import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

function Item({route}) {
  const {navigate} = useNavigation();
  return (
    <Pressable style={styles.item} onPress={() => navigate(route)}>
      <Text style={styles.itemText}>{route}</Text>
    </Pressable>
  );
}

export function DebugNavigaiton() {
  return (
    <View style={styles.container}>
      {/* <Item route="Home" /> */}
      <Item route="Login" />
      <Item route="Camera" />
      {/* <Item route="PostForm" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  itemText: {
    fontSize: 18,
    color: 'blue',
    textAlign: 'center',
  },
  item: {
    padding: 10,
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 8,
    borderColor: 'blue',
    margin: 5,
  },
});

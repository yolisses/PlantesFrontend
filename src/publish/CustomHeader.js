import {RerenderTester} from 'dev/rerenderTester';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export function CustomHeader({title, left, right}) {
  return (
    <View style={styles.container}>
      {left}
      <RerenderTester />
      <Text style={styles.title}>{title}</Text>
      {right}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    elevation: 4,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  title: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
  },
});

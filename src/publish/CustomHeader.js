import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export function CustomHeader({title, left, right}) {
  return (
    <View style={styles.container}>
      {left}
      <Text style={styles.title}>{title}</Text>
      {right}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    paddingHorizontal: 10,
    elevation: 3,
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

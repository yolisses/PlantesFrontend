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
    padding: 15,
    elevation: 4,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

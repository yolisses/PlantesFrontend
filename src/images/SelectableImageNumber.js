import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export function SelectableImageNumber({number}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{number}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
    aspectRatio: 1,
    padding: 4,
    borderRadius: 100,

    backgroundColor: 'green',
  },
  text: {
    fontSize: 16,
    color: 'white',
  },
});

import {SquareImage} from 'common/SquareImage';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export function SendingWarn({sending}) {
  return (
    <View style={[styles.container, styles.border]}>
      <SquareImage fraction={10} style={styles.image} />
      <Text style={styles.text}>Enviando</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
  },
  image: {
    marginRight: 5,
  },
  container: {
    flexDirection: 'row',
    padding: 5,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  border: {
    borderTopWidth: 2,
    borderColor: '#eee',
    borderStyle: 'solid',
  },
});

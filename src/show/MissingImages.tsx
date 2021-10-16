import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export function MissingImages({style}) {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.text}>Ocorreu algum erro:</Text>
      <Text style={styles.text}>Sem imagens desse item</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    color: 'gray',
  },
});

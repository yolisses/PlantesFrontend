import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {View} from 'react-native';
import {width} from 'utils/width';

export function ChooseImagesPlaceholder() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Para publicar, escolha fotos da planta, semente, etc
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width,
    padding: 20,
    aspectRatio: 1,
    alignItems: 'center',
    backgroundColor: '#eee',
    justifyContent: 'center',
  },
  text: {
    fontSize: 19,
    color: 'gray',
    textAlign: 'center',
  },
});

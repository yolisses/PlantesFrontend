import React from 'react';
import {StyleSheet, Text} from 'react-native';

export function MoneySign() {
  return <Text style={styles.sign}>R$</Text>;
}

const styles = StyleSheet.create({
  sign: {
    fontSize: 18,
    marginRight: 8,
  },
});

import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Card} from 'store/Card';

export function CardsListFooter() {
  return (
    <View style={styles.container}>
      <Card />
      <Card />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});

import React from 'react';
import {View, StyleSheet} from 'react-native';

export function LoadingItemInfo() {
  return (
    <View>
      <View style={[styles.line, {height: 30, width: 100}]} />
      <View style={[styles.line, {height: 30, width: 120}]} />
      <View style={[styles.line, {height: 30}]} />
      <View style={[styles.line, {height: 30, width: '70%'}]} />
    </View>
  );
}

const styles = StyleSheet.create({
  line: {
    backgroundColor: '#ddd',
    marginHorizontal: 10,
    marginTop: 10,
    borderRadius: 10,
  },
});

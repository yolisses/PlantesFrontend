import React from 'react';
import {ActivityIndicator} from 'react-native';
import {StyleSheet} from 'react-native';

export function LoadingScrollFooter() {
  return (
    <ActivityIndicator size="large" color="#0b0" style={styles.indicator} />
  );
}

const styles = StyleSheet.create({
  indicator: {
    margin: 10,
  },
});

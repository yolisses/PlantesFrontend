import React from 'react';
import {StyleSheet, View} from 'react-native';

export function LoadingAvailabilityInfo() {
  return (
    <View style={{flex: 1}}>
      <View style={styles.line} />
      <View style={styles.line} />
    </View>
  );
}

const styles = StyleSheet.create({
  line: {
    backgroundColor: '#ddd',
    borderRadius: 10,
    marginBottom: 10,
    paddingTop: 30,
    marginHorizontal: 10,
    flex: 1,
  },
});

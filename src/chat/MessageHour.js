import React from 'react';
import {StyleSheet, Text} from 'react-native';

export function MessageHour({hour = '12:32'}) {
  return <Text style={styles.hour}>{hour}</Text>;
}

const styles = StyleSheet.create({
  hour: {
    color: '#888',
    fontSize: 12,
  },
});

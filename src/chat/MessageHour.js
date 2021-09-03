import moment from 'moment';
import React from 'react';
import {StyleSheet, Text} from 'react-native';

export function MessageHour({time}) {
  return <Text style={styles.hour}>{moment(time).format('HH:mm')}</Text>;
}

const styles = StyleSheet.create({
  hour: {
    color: '#888',
    fontSize: 12,
  },
});

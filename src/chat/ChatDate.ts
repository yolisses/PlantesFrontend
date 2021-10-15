import React from 'react';
import {StyleSheet, Text} from 'react-native';
import moment from 'moment';

export function ChatDate({time, active}) {
  const getLastTimeString = () => {
    const a = moment();
    const b = moment(time);
    const daysAgo = a.diff(b, 'days');
    if (daysAgo === 0) {
      return b.format('HH:mm');
    } else if (daysAgo === 1) {
      return 'Ontem';
    }
    return b.format('DD/MM/YYYY');
  };

  return (
    <Text style={[styles.lastTime, active ? styles.lastTimeActive : false]}>
      {getLastTimeString()}
    </Text>
  );
}

const styles = StyleSheet.create({
  lastTime: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#bbb',
  },
  lastTimeActive: {
    color: '#0a3',
  },
});

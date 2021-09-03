import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {MessageHour} from './MessageHour';
import {MessageStatus} from './MessageStatus';

// development
const USER_ID = 100;

export function Message({item, moreMargin}) {
  const {text, time, status} = item;
  const fromUser = item.userId === USER_ID;

  return (
    <View
      style={[
        styles.message,
        fromUser && styles.fromUser,
        moreMargin && styles.moreMargin,
      ]}>
      <Text style={[styles.text, fromUser && styles.fromUserText]}>
        {text}
        <View style={{width: fromUser ? 45 : 28}} />
      </Text>
      <View style={styles.miniInfo}>
        <MessageHour time={time} />
        {fromUser && <MessageStatus status={status} />}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  message: {
    padding: 10,
    marginTop: 2,
    borderRadius: 10,

    backgroundColor: '#fff',
    alignSelf: 'flex-start',
    marginRight: 30,
    marginLeft: 0,
    elevation: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  text: {
    fontSize: 16,
  },
  fromUser: {
    backgroundColor: '#ccf8b6',
    alignSelf: 'flex-end',
    marginRight: 0,
    marginLeft: 30,
  },
  fromUserText: {
    // color: '#fff',
  },
  moreMargin: {
    marginTop: 10,
  },
  miniInfo: {
    position: 'absolute',
    right: 5,
    bottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

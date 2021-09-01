import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export function Message({text, fromUser, moreMargin}) {
  return (
    <View
      style={[
        styles.message,
        fromUser && styles.fromUser,
        moreMargin && styles.moreMargin,
      ]}>
      <Text style={[styles.text, fromUser && styles.fromUserText]}>{text}</Text>
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
});

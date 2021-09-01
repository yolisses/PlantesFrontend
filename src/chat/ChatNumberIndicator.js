import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export function ChatNumberIndicator() {
  return (
    <View style={{flexDirection: 'row-reverse'}}>
      <View style={styles.indicator}>
        <Text style={styles.text}>{Math.floor(100 * Math.random())}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  indicator: {
    backgroundColor: '#0a3',
    aspectRatio: 1,
    width: 25,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
  },
  text: {
    fontSize: 12,
    textAlignVertical: 'center',
    textAlign: 'center',
    color: 'white',
    paddingBottom: 1.25,
  },
});

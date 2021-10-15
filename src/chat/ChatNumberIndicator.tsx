import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export function ChatNumberIndicator({count}) {
  if (count < 1) {
    return null;
  }

  return (
    <View style={{flexDirection: 'row-reverse'}}>
      <View style={styles.indicator}>
        <Text style={styles.text}>{count}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  indicator: {
    backgroundColor: '#0a3',
    aspectRatio: 1,
    width: 23,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
  },
  text: {
    fontSize: 13,
    textAlignVertical: 'center',
    textAlign: 'center',
    color: 'white',
    paddingBottom: 1.25,
  },
});

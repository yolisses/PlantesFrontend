import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export function Tag({text}) {
  return (
    <View style={styles.tag}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  tag: {
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 8,
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    margin: 2,
  },
  text: {
    fontSize: 17.5,
  },
  activeText: {
    color: '#000',
  },
  icon: {
    marginRight: 5,
  },
});

import React from 'react';
import {StyleSheet, View} from 'react-native';

export function ProgressBar({ratio}) {
  return (
    <View style={styles.progressBar}>
      <View style={[styles.progressBarColor, {width: 100 * ratio + '%'}]} />
    </View>
  );
}

const styles = StyleSheet.create({
  progressBar: {
    height: 5,
    width: '100%',
  },
  progressBarColor: {
    flex: 1,
    backgroundColor: '#0c0',
  },
});

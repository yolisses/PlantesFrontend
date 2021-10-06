import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

export function MapTarget({style}) {
  return (
    <TouchableOpacity style={[styles.button, style]}>
      <View style={styles.center}>
        <View style={styles.squareV} />
        <View style={[styles.center, styles.row]}>
          <View style={styles.squareH} />
          <View style={styles.outer}>
            {/* <View style={styles.inner} /> */}
          </View>
          <View style={styles.squareH} />
        </View>
        <View style={styles.squareV} />
      </View>
    </TouchableOpacity>
  );
}

const color = '#0a2';

const styles = StyleSheet.create({
  inner: {
    backgroundColor: color,
    padding: 4,
    borderRadius: 100,
  },
  outer: {
    borderStyle: 'solid',
    borderWidth: 3,
    borderColor: color,
    padding: 10,
    aspectRatio: 1,
    borderRadius: 100,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  squareV: {
    padding: 1.5,
    paddingTop: 6,
    backgroundColor: color,
  },
  squareH: {
    padding: 1.5,
    paddingLeft: 6,
    backgroundColor: color,
  },
});

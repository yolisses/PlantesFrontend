import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

export function MapUserLocationButton({style}) {
  return (
    <TouchableOpacity style={[styles.button, style]}>
      <View style={styles.center}>
        <View style={styles.square} />
        <View style={[styles.center, styles.row]}>
          <View style={styles.square} />
          <View style={styles.outer}>
            <View style={styles.inner} />
          </View>
          <View style={styles.square} />
        </View>
        <View style={styles.square} />
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
    padding: 5,
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
  square: {
    padding: 1.5,
    backgroundColor: color,
  },
});

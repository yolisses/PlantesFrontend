import React from 'react';
import {StyleSheet, View} from 'react-native';

export function SwipeIndicator({images, selected}) {
  return images.length > 1 ? (
    <View style={styles.container} pointerEvents="none">
      {images.map((item, index) =>
        selected === index ? (
          <View style={styles.active} key={index} />
        ) : (
          <View style={styles.inactive} key={index} />
        ),
      )}
    </View>
  ) : null;
}

const size = 7;
const activeSize = 8;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: -13,
    right: 0,
    left: 0,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    flexDirection: 'row',
  },
  inactive: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'gray',
    backgroundColor: '#eee',
    borderRadius: 100,
    width: size,
    height: size,
    margin: 2.5,
  },
  active: {
    borderRadius: 100,
    width: activeSize,
    height: activeSize,
    margin: 2.5,
    aspectRatio: 1,
    backgroundColor: 'gray',
  },
});

import React from 'react';
import {StyleSheet, View} from 'react-native';

export function SwipeIndicator({images, selected}) {
  return (
    <View style={styles.container}>
      {images.length > 1
        ? images.map((item, index) =>
            selected === index ? (
              <View style={styles.active} key={index} />
            ) : (
              <View style={styles.inactive} key={index} />
            ),
          )
        : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
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
    padding: 3,
    margin: 2.5,
  },
  active: {
    borderRadius: 100,
    padding: 4.2,
    margin: 2.5,
    aspectRatio: 1,
    backgroundColor: 'gray',
  },
});

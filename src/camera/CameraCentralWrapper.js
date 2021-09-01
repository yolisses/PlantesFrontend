import React from 'react';
import {StyleSheet, View} from 'react-native';

import {Dimensions} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export function CameraCentralWrapper({children, childrenProps}) {
  return (
    <View style={styles.wrapper}>
      {children}
      <View style={styles.spacer} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    zIndex: 10,
    alignItems: 'center',
    bottom: 0,
    width: '100%',
  },
  spacer: {
    padding: (height - width) / 8,
  },
});

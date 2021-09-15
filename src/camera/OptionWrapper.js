import React from 'react';
import {StyleSheet, View} from 'react-native';
import {width} from 'utils/width';

export function OptionsWrapper({children, style}) {
  return <View style={[styles.container, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width,
    height: width / 4,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#0005',
    justifyContent: 'space-between',
  },
});

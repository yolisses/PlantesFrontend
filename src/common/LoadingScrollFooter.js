import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {StyleSheet} from 'react-native';

export function LoadingScrollFooter({active}) {
  return (
    <View style={styles.wrapper}>
      {active && (
        <ActivityIndicator size="large" color="#0b0" style={styles.indicator} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import React from 'react';
import {View} from 'react-native';
import {StyleSheet} from 'react-native';
import {SectionMarker} from './SectionMarker';

export function Section({children, name}) {
  return (
    <View style={styles.container}>
      {!!name && <SectionMarker text={name} />}
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
});

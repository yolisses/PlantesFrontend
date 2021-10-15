import React from 'react';
import {StyleSheet, View} from 'react-native';

import {FiltersConfig} from './FiltersConfig';
import {SearchBox} from './SearchBox';

export function SearchCustomHeader() {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <SearchBox />
      </View>
      <FiltersConfig />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
  },
  top: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 5,
  },
});

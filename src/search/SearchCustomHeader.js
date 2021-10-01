import React from 'react';
import {StyleSheet, View} from 'react-native';

import {UserRoundImage} from 'common/UserRoundImage';
import {auth} from 'auth/auth';
import {FiltersConfig} from './FiltersConfig';
import {SearchBox} from './SearchBox';

export function SearchCustomHeader() {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <SearchBox />
        <UserRoundImage
          size={40}
          userId={auth.userId}
          image={auth.user?.image}
        />
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

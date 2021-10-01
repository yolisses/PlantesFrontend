import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {SearchButton} from 'home/SearchButton';
import {SearchingField} from 'home/SearchingField';
import {UserRoundImage} from 'common/UserRoundImage';
import {auth} from 'auth/auth';
import {FiltersConfig} from './FiltersConfig';

export function SearchCustomHeader() {
  const [textSearch, setTextSearch] = useState(false);

  function onSearchPress() {
    setTextSearch(true);
  }

  function onCloseSearchPress() {
    setTextSearch(false);
  }

  return (
    <View>
      <View style={styles.topWrapper}>
        {!textSearch ? (
          <View style={styles.header}>
            <View style={styles.searchBox}>
              <Text style={styles.title}>Plantei</Text>
              <SearchButton onPress={onSearchPress} />
            </View>
            <UserRoundImage
              size={40}
              userId={auth.userId}
              image={auth.user?.image}
            />
          </View>
        ) : (
          <SearchingField onClosePress={onCloseSearchPress} />
        )}
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  topWrapper: {
    width: '100%',
    backgroundColor: 'white',
  },
  rightWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchBox: {
    marginVertical: 3,
    elevation: 3,
    backgroundColor: '#fff',
    borderRadius: 100,
    padding: 10,
    flex: 1,
    flexDirection: 'row',
    marginRight: 20,
    alignItems: 'center',
  },
});

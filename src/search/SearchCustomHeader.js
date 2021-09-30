import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';

import {SearchButton} from 'home/SearchButton';
import {CustomHeader} from 'publish/CustomHeader';
import {SearchingField} from 'home/SearchingField';
import {UserRoundImage} from 'common/UserRoundImage';
import {AvailabilityButtons} from 'home/AvailabilityButtons';
import {auth} from 'auth/auth';

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
          <CustomHeader
            title="Plantei"
            style={styles.header}
            right={
              <View style={styles.rightWrapper}>
                <View style={styles.spacer}>
                  <SearchButton onPress={onSearchPress} />
                </View>
                <UserRoundImage
                  size={40}
                  userId={auth.userId}
                  image={auth.user?.image}
                />
              </View>
            }
          />
        ) : (
          <SearchingField onClosePress={onCloseSearchPress} />
        )}
      </View>
      <AvailabilityButtons />
    </View>
  );
}

const styles = StyleSheet.create({
  topWrapper: {
    zIndex: 20,
    width: '100%',
    position: 'absolute',
    backgroundColor: 'white',
    elevation: 0,
  },
  header: {
    elevation: 0,
  },
  rightWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  spacer: {
    marginRight: 20,
  },
});

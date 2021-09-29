import React, {useMemo, useState} from 'react';
import {StyleSheet, View} from 'react-native';

import {SearchButton} from 'home/SearchButton';
import {useUserContext} from 'auth/userContext';
import {CustomHeader} from 'publish/CustomHeader';
import {SearchingField} from 'home/SearchingField';
import {UserRoundImage} from 'common/UserRoundImage';
import {AvailabilityButtons} from 'home/AvailabilityButtons';

export function SearchCustomHeader({HidableHeader}) {
  const [textSearch, setTextSearch] = useState(false);
  const {user} = useUserContext();

  function onSearchPress() {
    setTextSearch(true);
  }

  function onCloseSearchPress() {
    setTextSearch(false);
  }

  return useMemo(
    () => (
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
                    userId={user?._id}
                    image={user?.image}
                  />
                </View>
              }
            />
          ) : (
            <SearchingField onClosePress={onCloseSearchPress} />
          )}
        </View>
        <HidableHeader>
          <AvailabilityButtons />
        </HidableHeader>
      </View>
    ),
    [textSearch, setTextSearch],
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

import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';

import {SearchButton} from 'home/SearchButton';
import {CustomHeader} from 'publish/CustomHeader';
import {SearchingField} from 'home/SearchingField';
import {UserRoundImage} from 'common/UserRoundImage';
import {auth} from 'auth/auth';
import {AvailiabilityButton} from 'home/AvailiabilityButton';
import {OptionsButton} from 'home/OptionsButton';
import {useModal} from 'modal/ModalContext';
import {FiltersModal} from './FiltersModal';
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
          <CustomHeader
            title="Plantei"
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
      <FiltersConfig />
    </View>
  );
}

const styles = StyleSheet.create({
  topWrapper: {
    width: '100%',
    backgroundColor: 'white',
    elevation: 0,
  },
  rightWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  spacer: {
    marginRight: 20,
  },
  container: {
    height: 45,
    elevation: 3,
    flexDirection: 'row',
    alignItems: 'stretch',
    backgroundColor: 'white',
    justifyContent: 'space-evenly',
  },
});

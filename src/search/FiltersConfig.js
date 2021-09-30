import {OptionsButton} from 'home/OptionsButton';
import {useModal} from 'modal/ModalContext';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {FiltersModal} from './FiltersModal';

export function FiltersConfig() {
  const {showModal} = useModal();
  function onFiltersPress() {
    showModal(<FiltersModal />, 400);
  }
  return (
    <View style={styles.container}>
      <OptionsButton text="Filtrar" onPress={onFiltersPress} />
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

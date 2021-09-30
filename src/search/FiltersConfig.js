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
  container: {
    height: 40,
    elevation: 3,
    flexDirection: 'row',
    alignItems: 'stretch',
    backgroundColor: 'white',
    justifyContent: 'space-evenly',
  },
});

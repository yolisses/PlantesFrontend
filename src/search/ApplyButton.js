import {reset} from 'home/loadPlants';
import {useModal} from 'modal/ModalContext';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text, TouchableOpacity} from 'react-native';
import {searchOptions} from './searchOptions';
import {unappliedSearchOptions} from './unappliedSearchOptions';

export function ApplyButton({onPress}) {
  const {closeModal} = useModal();

  function onPressAndClose(e) {
    searchOptions.availabilities = unappliedSearchOptions.availabilities;
    searchOptions.tags = unappliedSearchOptions.tags;
    reset();
    closeModal();
  }

  return (
    <View style={styles.facade}>
      <TouchableOpacity
        style={styles.button}
        onPress={onPressAndClose}
        activeOpacity={0.9}>
        <Text style={styles.text}>Aplicar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    margin: 5,
    borderRadius: 10,
    padding: 12,
    backgroundColor: 'green',
    bottom: 0,
  },
  text: {
    textAlign: 'center',
    fontSize: 18,
    color: '#fff',
  },
  facade: {
    backgroundColor: '#fff',
  },
});

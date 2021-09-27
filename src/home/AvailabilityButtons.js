import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {AvailiabilityButton} from './AvailiabilityButton';
import {OptionsButton} from './OptionsButton';

export function AvailabilityButtons() {
  return (
    <View style={styles.container}>
      <AvailiabilityButton text="Doação" />
      <AvailiabilityButton text="Troca" />
      <AvailiabilityButton text="Venda" />
      <OptionsButton text="Filtrar" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    height: 100,
    elevation: 3,
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-evenly',
    backgroundColor: 'white',
  },
});

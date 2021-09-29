import React from 'react';
import {StyleSheet, View} from 'react-native';
import {AvailiabilityButton} from './AvailiabilityButton';
import {OptionsButton} from './OptionsButton';

export function AvailabilityButtons() {
  return (
    <View style={styles.container}>
      <AvailiabilityButton text="Doação" id="donate" />
      <AvailiabilityButton text="Troca" id="swap" />
      <AvailiabilityButton text="Venda" id="sell" />
      <OptionsButton text="Filtrar" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    height: 100,
    elevation: 3,
    paddingTop: 60,
    flexDirection: 'row',
    alignItems: 'stretch',
    backgroundColor: 'white',
    justifyContent: 'space-evenly',
  },
});

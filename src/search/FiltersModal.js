import {AvailiabilityButton} from 'home/AvailiabilityButton';
import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';

export function FiltersModal() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.wrapper}>
        <AvailiabilityButton text="Doação" id="donate" />
        <AvailiabilityButton text="Troca" id="swap" />
        <AvailiabilityButton text="Venda" id="sell" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 5,
    height: 50,
    elevation: 3,
    flexDirection: 'row',
    alignItems: 'stretch',
    backgroundColor: 'white',
    justifyContent: 'space-evenly',
  },
  container: {
    paddingTop: 24,
  },
});

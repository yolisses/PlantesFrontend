import {useObserver} from 'mobx-react-lite';
import React from 'react';
import {StyleSheet} from 'react-native';
import {Text, TouchableOpacity} from 'react-native';
import {reset} from './unappliedSearchOptions';

export function CleanFiltersButton({text, onPress}) {
  function onPress() {
    reset();
  }

  return useObserver(() => (
    <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  ));
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
  },
});

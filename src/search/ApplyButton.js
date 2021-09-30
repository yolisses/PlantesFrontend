import {useModal} from 'modal/ModalContext';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text, TouchableOpacity} from 'react-native';

export function ApplyButton() {
  const {closeModal} = useModal();

  function onPress() {
    closeModal();
  }

  return (
    <View style={styles.facade}>
      <TouchableOpacity
        style={styles.button}
        onPress={onPress}
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

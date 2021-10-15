import React from 'react';
import {StyleSheet, View} from 'react-native';
import {LightButton} from 'common/LightButton';

export function UserButtons() {
  return (
    <View style={styles.buttonsWrapper}>
      <LightButton text="Seguir" style={styles.button} />
      <LightButton text="Mensagem" style={styles.button} emphasis />
    </View>
  );
}

const styles = StyleSheet.create({
  buttonsWrapper: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 4,
    justifyContent: 'space-evenly',
  },
  button: {
    flex: 1,
    margin: 4,
    padding: 25,
  },
});

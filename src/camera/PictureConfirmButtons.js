import React from 'react';
import {StyleSheet, View} from 'react-native';
import {faCheck, faTimes} from '@fortawesome/free-solid-svg-icons';

import {LightButton} from 'common/LightButton';

export function PictureConfirmButtons({onDiscardPress, onApprovePress}) {
  return (
    <View style={styles.wrapper}>
      <LightButton
        text="Descartar"
        style={styles.button}
        icon={faTimes}
        iconColor="#b55"
        onPress={onDiscardPress}
      />
      <LightButton
        text="Usar"
        style={styles.button}
        icon={faCheck}
        iconColor="#5b5"
        onPress={onApprovePress}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    paddingHorizontal: 5,
    transform: [{translateY: 31}],
  },
  button: {
    flex: 1,
    marginHorizontal: 5,
  },
});

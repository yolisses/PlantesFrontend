import React from 'react';
import {StyleSheet, View} from 'react-native';

import {LightButton} from 'common/LightButton';
import {faEdit} from '@fortawesome/free-solid-svg-icons';

export function EditItemButton({onPress}) {
  return (
    <View style={{justifyContent: 'center'}}>
      <LightButton
        text="Editar"
        icon={faEdit}
        style={styles.messageButton}
        textStyle={styles.messageButtonText}
        onPress={onPress}
        iconColor="black"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  messageButton: {
    backgroundColor: 'white',
  },
  messageButtonText: {
    color: 'black',
  },
});

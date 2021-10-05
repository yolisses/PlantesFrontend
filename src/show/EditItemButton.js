import React from 'react';
import {StyleSheet, View} from 'react-native';

import {LightButton} from 'common/LightButton';
import {faEdit} from '@fortawesome/free-solid-svg-icons';
import {useNavigation} from '@react-navigation/core';

export function EditItemButton({item}) {
  const {navigate} = useNavigation();

  function onPress() {
    navigate('Edit', {item});
  }

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

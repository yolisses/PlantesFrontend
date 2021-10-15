import React from 'react';
import {StyleSheet, View} from 'react-native';

import {LightButton} from 'common/LightButton';
import {faEdit} from '@fortawesome/free-solid-svg-icons';
import {useNavigation} from '@react-navigation/core';

export function EditItemButton({item, ...rest}) {
  const {navigate} = useNavigation();

  function onPress() {
    navigate('Edit', {item});
  }

  return (
    <View style={{justifyContent: 'center'}}>
      <LightButton
        text="Editar"
        icon={faEdit}
        onPress={onPress}
        iconColor="black"
        style={styles.messageButton}
        textStyle={styles.messageButtonText}
        {...rest}
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

import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useAlert} from 'alert/AlertContext';
import {DiscardPublishAlert} from './DiscardPublishAlert';

export function DiscardButton() {
  const {showAlert} = useAlert();
  const onPress = () => {
    showAlert(<DiscardPublishAlert />);
  };

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.5}>
      <Text style={styles.text}>Descartar</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
  },
});

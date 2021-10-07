import React from 'react';
import {StyleSheet, Linking} from 'react-native';
import {SendMessageButton} from './SendMessageButton';
import {faWhatsapp} from '@fortawesome/free-brands-svg-icons';

export function WhatsappButton() {
  async function onPress() {
    const phoneNumber = 558399259907;
    const supported = await Linking.canOpenURL(
      `whatsapp://send?phone=${phoneNumber}`,
    );
    if (supported) {
      return Linking.openURL(`whatsapp://send?phone=${phoneNumber}`);
    } else {
      return Linking.openURL(
        `https://api.whatsapp.com/send?phone=${phoneNumber}`,
      );
    }
  }

  return (
    <SendMessageButton
      icon={faWhatsapp}
      onPress={onPress}
      iconColor={'#fff'}
      activeOpacity={0.85}
      textStyle={styles.text}
      buttonStyle={styles.button}
    />
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'green',
  },
  text: {
    color: '#fff',
  },
  icon: {
    marginLeft: 10,
  },
});

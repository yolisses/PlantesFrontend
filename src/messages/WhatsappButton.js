import React from 'react';
import {StyleSheet} from 'react-native';
import {SendMessageButton} from './SendMessageButton';
import {faWhatsapp} from '@fortawesome/free-brands-svg-icons';
import {openInWhatsapp} from './openInWhatsapp';

export function WhatsappButton({phoneNumber}) {
  function onPress() {
    openInWhatsapp(phoneNumber);
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

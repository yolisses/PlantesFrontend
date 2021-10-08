import React from 'react';
import {StyleSheet} from 'react-native';
import {TextIconButton} from '../comment/TextIconButton';
import {faWhatsapp} from '@fortawesome/free-brands-svg-icons';
import {openInWhatsapp} from './openInWhatsapp';

export function WhatsappButton({number}) {
  function onPress() {
    openInWhatsapp(number);
  }

  return (
    <TextIconButton
      text="Mensagem"
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

import React from 'react';
import {StyleSheet} from 'react-native';

import {faInstagram} from '@fortawesome/free-brands-svg-icons';

import {openInInstagram} from './openInInstagram';
import {TextIconButton} from 'common/TextIconButton';

export function InstagramButton({user}) {
  async function onPress() {
    openInInstagram(user);
  }

  return (
    <TextIconButton
      text="Mensagem"
      onPress={onPress}
      icon={faInstagram}
      style={styles.button}
      iconColor={'#9620dd'}
      textStyle={styles.text}
    />
  );
}

const styles = StyleSheet.create({
  button: {
    elevation: 2,
  },
});

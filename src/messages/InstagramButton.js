import React from 'react';
import {StyleSheet} from 'react-native';
import {SendMessageButton} from './SendMessageButton';
import {faInstagram} from '@fortawesome/free-brands-svg-icons';
import {openInInstagram} from './openInInstagram';

export function InstagramButton({user}) {
  async function onPress() {
    openInInstagram(user);
  }

  return (
    <SendMessageButton
      icon={faInstagram}
      onPress={onPress}
      activeOpacity={0.97}
      iconColor={'#9620dd'}
      textStyle={styles.text}
      buttonStyle={styles.button}
    />
  );
}

const styles = StyleSheet.create({
  button: {},
  text: {},
  icon: {
    marginLeft: 10,
  },
});

import React from 'react';
import {StyleSheet, Linking} from 'react-native';
import {SendMessageButton} from './SendMessageButton';
import {faInstagram} from '@fortawesome/free-brands-svg-icons';
import {openInInstagram} from './openInInstagram';

export function InstagramButton({instagramUser}) {
  async function onPress() {
    openInInstagram(instagramUser);
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

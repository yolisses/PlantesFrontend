import React from 'react';
import {StyleSheet, Linking} from 'react-native';
import {SendMessageButton} from './SendMessageButton';
import {faInstagram} from '@fortawesome/free-brands-svg-icons';

export function InstagramButton() {
  async function onPress() {
    const supported = await Linking.canOpenURL(
      'instagram://user?username=zacefron',
    );
    if (supported) {
      return Linking.openURL('instagram://user?username=zacefron');
    } else {
      return Linking.openURL('https://api.instagram.com/zacefron');
    }
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

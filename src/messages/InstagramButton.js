import React from 'react';
import {StyleSheet, Linking} from 'react-native';
import {SendMessageButton} from './SendMessageButton';
import {faInstagram, faWhatsapp} from '@fortawesome/free-brands-svg-icons';

export function InstagramButton() {
  async function onPress() {
    const supported = await Linking.canOpenURL('instagram://app');
    // if (supported) {
    return Linking.openURL('instagram://user?username=zacefron');
    // } else {
    //   return Linking.openURL('https://api.instagram.com');
    // }
  }

  return (
    <SendMessageButton
      icon={faInstagram}
      onPress={onPress}
      activeOpacity={0.9}
      iconColor={'#a630bb'}
      textStyle={styles.text}
      buttonStyle={styles.button}
    />
  );
}

const styles = StyleSheet.create({
  button: {
    // backgroundColor: 'green',
  },
  text: {
    // color: '#a630bb',
  },
  icon: {
    marginLeft: 10,
  },
});

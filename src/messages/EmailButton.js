import React from 'react';
import {StyleSheet, Linking} from 'react-native';
import {SendMessageButton} from './SendMessageButton';
import {faEnvelope} from '@fortawesome/free-regular-svg-icons';

export function EmailButton() {
  async function onPress() {
    let url = `mailto:${'m.stunik@gmail.com'}`;
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      return Linking.openURL(url);
    } else {
      throw new Error('Provided URL can not be handled');
    }
  }

  return (
    <SendMessageButton
      text="Email"
      icon={faEnvelope}
      onPress={onPress}
      iconSize={21}
      activeOpacity={0.97}
      iconColor={'#79f'}
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

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, Linking, View} from 'react-native';
import {faWhatsapp} from '@fortawesome/free-brands-svg-icons';
import {width} from 'utils/width';

export function SendMessageButton() {
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
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.85}
      style={styles.button}>
      <FontAwesomeIcon
        icon={faWhatsapp}
        color="#fff"
        size={25}
        style={styles.icon}
      />
      <Text style={styles.text}>Mensagem</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 10,
    borderRadius: 10,
    justifyContent: 'center',
  },
  text: {
    marginHorizontal: 10,
    color: '#fff',
    fontSize: 18,
  },
  icon: {
    marginLeft: 10,
  },
});

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, Linking} from 'react-native';
import {faWhatsapp} from '@fortawesome/free-brands-svg-icons';

export function SendMessageButton() {
  async function onPress() {
    const phoneNumber = 5599259907;
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
      activeOpacity={0.7}
      style={styles.button}>
      <FontAwesomeIcon
        icon={faWhatsapp}
        color="white"
        size={25}
        style={styles.icon}
      />
      <Text style={styles.text}>Enviar mensagem</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    flexWrap: 'wrap',
    color: 'white',
    fontSize: 18,
  },
  button: {
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 10,
  },
  icon: {
    marginRight: 5,
  },
});

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

export function SendMessageButton({
  icon,
  onPress,
  iconColor,
  textStyle,
  buttonStyle,
  activeOpacity,
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={activeOpacity}
      style={[styles.button, buttonStyle]}>
      <FontAwesomeIcon
        size={25}
        icon={icon}
        color={iconColor}
        style={styles.icon}
      />
      <Text style={[styles.text, textStyle]}>Mensagem</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    padding: 10,
    borderRadius: 10,
    elevation: 2,
    justifyContent: 'center',
    marginBottom: 10,
  },
  text: {
    marginHorizontal: 10,
    fontSize: 18,
  },
  icon: {
    marginLeft: 10,
  },
});

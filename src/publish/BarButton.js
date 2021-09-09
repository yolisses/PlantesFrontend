import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

export function BarButton({
  text,
  icon,
  onPress,
  iconSize,
  iconColor,
  iconStyle,
  ...rest
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={styles.container}>
      <FontAwesomeIcon
        {...rest}
        icon={icon}
        style={iconStyle}
        size={iconSize || 24}
        color={iconColor || 'gray'}
      />
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
  },
});

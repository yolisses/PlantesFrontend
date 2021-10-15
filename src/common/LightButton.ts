import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export function LightButton({
  text,
  icon,
  rightIcon,
  iconColor,
  rightIconColor,
  onPress,
  style,
  textStyle,
  emphasis,
}) {
  return (
    <TouchableOpacity
      style={[styles.button, emphasis && styles.emphasisButton, style]}
      onPress={onPress}
      activeOpacity={0.8}>
      {icon ? (
        <FontAwesomeIcon
          style={styles.icon}
          icon={icon}
          size={25}
          color={iconColor || '#aaa'}
        />
      ) : null}
      <View style={{flex: 1}} />
      {rightIcon ? (
        <FontAwesomeIcon
          style={styles.rightIcon}
          icon={rightIcon}
          size={25}
          color={rightIconColor || '#aaa'}
        />
      ) : null}
      <View style={styles.textWrapper}>
        <Text style={[styles.text, emphasis && styles.emphasisText, textStyle]}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginVertical: 3,
    elevation: 2,
    flexDirection: 'row',
  },
  emphasisButton: {
    backgroundColor: 'green',
  },
  text: {
    fontSize: 16,
    width: '100%',
    textAlign: 'center',
    // backgroundColor: 'red',
    paddingHorizontal: 40,
  },
  emphasisText: {
    color: '#fff',
  },
  icon: {},
  rightIcon: {},
  textWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },
});

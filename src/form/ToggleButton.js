import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';

import {faCheck} from '@fortawesome/free-solid-svg-icons';
import {faCircle} from '@fortawesome/free-regular-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const activeColor = '#0a0';

export function ToggleButton({
  label,
  style,
  option,
  pushTag,
  removeTag,
  active,
  ...rest
}) {
  function onPress() {
    if (active) {
      removeTag(option.key);
    } else {
      pushTag(option.key);
    }
  }
  return (
    <Pressable
      {...rest}
      onPress={onPress}
      style={[styles.input, style, active && styles.active]}>
      {active ? (
        <FontAwesomeIcon
          size={15}
          icon={faCheck}
          style={styles.icon}
          color={activeColor}
        />
      ) : (
        <FontAwesomeIcon
          size={15}
          color={'#ccc'}
          icon={faCircle}
          style={styles.icon}
        />
      )}
      <Text style={[styles.text, active && styles.activeText]}>
        {option.label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  input: {
    margin: 2,
    borderWidth: 2,
    borderRadius: 10,
    paddingVertical: 8,
    borderColor: '#ccc',
    flexDirection: 'row',
    paddingHorizontal: 5,
    alignItems: 'center',
    borderStyle: 'solid',
    alignSelf: 'flex-start',
  },
  text: {
    fontSize: 17.5,
    color: '#888',
  },
  active: {
    borderColor: activeColor,
  },
  activeText: {
    color: '#000',
  },
  icon: {
    marginRight: 5,
  },
});

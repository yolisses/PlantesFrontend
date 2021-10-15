import React, {useMemo} from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';

import {faCheck} from '@fortawesome/free-solid-svg-icons';
import {faCircle} from '@fortawesome/free-regular-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {RerenderTester} from 'dev/rerenderTester';
const activeColor = '#0a0';

export function ToggleButton({
  label,
  style,
  value,
  change,
  option,
  showIcon = true,
  onChangeCallback,
  ...rest
}) {
  function handlePress() {
    change(() => option);
  }

  return useMemo(
    () => (
      <Pressable
        {...rest}
        onPress={handlePress}
        style={[styles.input, style, value && styles.active]}>
        {showIcon &&
          (value ? (
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
          ))}
        <Text style={[styles.text, value && styles.activeText]}>{label}</Text>
      </Pressable>
    ),
    [value],
  );
}

const styles = StyleSheet.create({
  input: {
    margin: 2,
    borderWidth: 2,
    borderRadius: 10,
    paddingVertical: 10,
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

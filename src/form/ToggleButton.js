import React, {useEffect, useState} from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';

import {faCheck} from '@fortawesome/free-solid-svg-icons';
import {faCircle} from '@fortawesome/free-regular-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const activeColor = '#0a0';

export function ToggleButton({option, style, onChange, ...rest}) {
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (onChange) {
      onChange(active);
    }
  }, [active, onChange]);

  return (
    <Pressable
      onPress={() => setActive(!active)}
      style={[styles.input, style, active && styles.active]}
      {...rest}>
      {active ? (
        <FontAwesomeIcon
          icon={faCheck}
          style={styles.icon}
          color={activeColor}
          size={15}
        />
      ) : (
        <FontAwesomeIcon
          icon={faCircle}
          style={styles.icon}
          color={'#ccc'}
          size={15}
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
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 5,
    paddingVertical: 8,
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    margin: 2,
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

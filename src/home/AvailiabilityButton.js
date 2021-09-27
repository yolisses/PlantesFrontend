import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

export function AvailiabilityButton({text, style, ...rest}) {
  const [active, setActive] = useState(false);

  const onPress = () => {
    setActive(!active);
  };

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[styles.container, active && styles.active]}
      onPress={onPress}>
      <Text style={[styles.capsule, active && styles.activeText]}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  capsule: {
    fontSize: 17,
    color: '#999',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#999',

    margin: 2,
  },
  activeText: {
    color: '#080',
  },
  active: {
    borderColor: '#0a0',
  },
});

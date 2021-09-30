import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

export function ConfigButton({text, icon, ...rest}) {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.7} {...rest}>
      {!!icon && (
        <FontAwesomeIcon
          icon={icon}
          size={25}
          style={styles.icon}
          color="#666"
        />
      )}
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#bbb',
    borderBottomWidth: 1,
  },
  text: {
    fontSize: 20,
  },
  icon: {
    marginRight: 10,
  },
});

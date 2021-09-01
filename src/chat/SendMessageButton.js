import {faPaperPlane} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

export function SendMessageButton() {
  return (
    <TouchableOpacity style={styles.button} activeOpacity={0.7}>
      <FontAwesomeIcon icon={faPaperPlane} color="#fff" size={25} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#095',
    paddingRight: 14,
    paddingLeft: 10,
    paddingTop: 13,
    paddingBottom: 11,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 3,
    elevation: 2,
  },
  icon: {
    transform: [{rotate: 0.5}],
  },
});

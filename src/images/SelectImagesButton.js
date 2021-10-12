import React from 'react';
import {TouchableOpacity} from 'react-native';
import {StyleSheet, Text} from 'react-native';

import {faImage} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

import {openImagePicker} from 'images/openImagePicker';

export function SelectImagesButton({value, reduced, onChange}) {
  function onPress() {
    openImagePicker(onChange);
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={[styles.select, reduced ? styles.reduced : styles.expanded]}>
      <FontAwesomeIcon icon={faImage} size={20} style={styles.icon} />
      <Text style={styles.text}>Selecionar</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  select: {
    flex: 1,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: '#eee',
    justifyContent: 'center',
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: '#bbb',
  },
  reduced: {
    flexDirection: 'row',
    padding: 15,
    borderTopWidth: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  },
  expanded: {
    height: 160,
  },
  icon: {
    marginTop: 1,
    marginHorizontal: 10,
  },
  text: {
    fontSize: 18,
  },
});

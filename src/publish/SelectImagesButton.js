import {faImage} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {StyleSheet, Text} from 'react-native';

export function SelectImagesButton({value, onChange, reduced, control}) {
  const {navigate} = useNavigation();

  function onPress() {
    navigate('Images', {value, control, onChange});
  }

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[styles.select, reduced ? styles.reduced : styles.expanded]}
      onPress={onPress}>
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
    marginBottom: 10,
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

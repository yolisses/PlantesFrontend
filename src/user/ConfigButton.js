import {faBars} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export function ConfigButton() {
  const {navigate} = useNavigation();

  function onPress() {
    navigate('Config');
  }

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      <FontAwesomeIcon icon={faBars} size={20} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
  },
});

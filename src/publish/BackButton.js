import React from 'react';
import {TouchableOpacity} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {useNavigation} from '@react-navigation/core';

export function BackButton({...rest}) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity {...rest} activeOpacity={0.5} onPress={navigation.goBack}>
      <FontAwesomeIcon
        icon={faArrowLeft}
        size={20}
        style={{marginRight: 15}}
        color="black"
      />
    </TouchableOpacity>
  );
}

import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

const optionButtonSize = 25;

export function FloatingButton() {
  const {navigate} = useNavigation();

  function onPress() {
    navigate('Home');
  }

  return (
    <View style={[styles.optionsWrapper, {alignItems: 'flex-start'}]}>
      <TouchableOpacity onPress={onPress} style={styles.goBackOption}>
        <FontAwesomeIcon
          icon={faArrowLeft}
          color="white"
          size={optionButtonSize}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  optionsWrapper: {
    width: '100%',
    position: 'absolute',
    zIndex: 100,
  },
  goBackOption: {
    margin: 10,
    padding: 10,
    backgroundColor: '#0008',
    borderRadius: 100,
  },
});

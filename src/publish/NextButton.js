import {faArrowRight} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {StyleSheet, Text} from 'react-native';

export function NextButton({route, text, customOnPress, hideIcon}) {
  const {navigate} = useNavigation();

  function onPress() {
    if (customOnPress) {
      customOnPress();
    } else {
      navigate(route);
    }
  }

  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.8}
      onPress={onPress}>
      <Text style={styles.text}>{text || 'Próximo'}</Text>
      {!hideIcon && (
        <FontAwesomeIcon
          style={styles.icon}
          icon={faArrowRight}
          color={'green'}
          size={26}
        />
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  icon: {
    marginLeft: 10,
  },
  button: {
    borderRadius: 0,
    marginVertical: 0,
    flexDirection: 'row',
  },
  text: {
    fontSize: 20,
    color: 'green',
    fontWeight: 'bold',
    alignItems: 'center',
  },
});

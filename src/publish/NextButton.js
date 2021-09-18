import {faArrowRight} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {StyleSheet, Text} from 'react-native';

export function NextButton({route, text, onSubmit}) {
  const {navigate} = useNavigation();

  function onPress() {
    navigate(route);
    if (onSubmit) {
      onSubmit();
    }
  }

  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.8}
      onPress={onPress}>
      <Text style={styles.text}>{text || 'Próximo'}</Text>
      <FontAwesomeIcon
        style={styles.icon}
        icon={faArrowRight}
        color={'green'}
        size={26}
      />
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

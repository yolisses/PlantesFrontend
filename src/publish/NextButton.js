import {faArrowRight, faChevronRight} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {StyleSheet, Text} from 'react-native';

export function NextButton({route, last}) {
  const {navigate} = useNavigation();

  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.8}
      onPress={() => navigate(route)}>
      {/* rightIconColor="green" */}
      {/* style={styles.nextButton} */}
      {/* rightIcon={faChevronRight} */}
      {/* textStyle={styles.nextButtonText}> */}
      <Text style={styles.text}>{last ? 'Enviar' : 'Próximo'}</Text>
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
    alignSelf: 'flex-end',
  },
  text: {
    fontSize: 20,
    color: 'green',
    fontWeight: 'bold',
    alignItems: 'center',
  },
});

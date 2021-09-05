import {faChevronRight} from '@fortawesome/free-solid-svg-icons';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet} from 'react-native';
import {LightButton} from 'common/LightButton';

export function NextButton({route}) {
  const {navigate} = useNavigation();

  return (
    <LightButton
      style={styles.nextButton}
      textStyle={styles.nextButtonText}
      text="Próximo"
      rightIcon={faChevronRight}
      rightIconColor="#fff"
      onPress={() => navigate(route)}
    />
  );
}

const styles = StyleSheet.create({
  nextButton: {
    backgroundColor: 'green',
    borderRadius: 0,
    marginVertical: 0,
  },
  nextButtonText: {
    color: '#fff',
  },
});

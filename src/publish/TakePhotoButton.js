import React from 'react';
import {StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {faCamera} from '@fortawesome/free-solid-svg-icons';

import {LightButton} from 'common/LightButton';

const emphasisColor = '#090';

export function TakePhotoButton() {
  const {navigate} = useNavigation();
  return (
    <LightButton
      icon={faCamera}
      text="Tirar foto"
      style={styles.button}
      iconColor={emphasisColor}
      onPress={() => navigate('Camera')}
    />
  );
}

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 30,
    paddingVertical: 15,
  },
});

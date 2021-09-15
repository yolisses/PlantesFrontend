import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {CameraOptionButton} from './CameraOptionButton';

export function GoBackCameraButton() {
  const {goBack} = useNavigation();

  return (
    <CameraOptionButton
      size={35}
      image={require('./assets/close.png')}
      onPress={goBack}
    />
  );
}

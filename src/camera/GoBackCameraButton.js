import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {CameraOptionButton} from './CameraOptionButton';

export function GoBackCameraButton() {
  const {goBack} = useNavigation();

  return <CameraOptionButton icon={faArrowLeft} onPress={goBack} />;
}

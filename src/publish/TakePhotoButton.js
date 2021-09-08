import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {faCamera} from '@fortawesome/free-solid-svg-icons';

import {LightButton} from 'common/LightButton';

export function TakePhotoButton({...res}) {
  const {navigate} = useNavigation();
  return (
    <LightButton
      icon={faCamera}
      text="Tirar foto"
      iconColor={'#090'}
      onPress={() => navigate('Camera')}
      {...res}
    />
  );
}

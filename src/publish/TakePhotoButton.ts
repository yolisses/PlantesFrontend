import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {faCamera} from '@fortawesome/free-solid-svg-icons';
import {BarButton} from './BarButton';

export function TakePhotoButton({...res}) {
  const {navigate} = useNavigation();
  return (
    <BarButton
      {...res}
      iconSize={25}
      icon={faCamera}
      text="Tirar foto"
      iconColor={'#090'}
      iconStyle={{marginRight: 6}}
      onPress={() => navigate('Camera')}
    />
  );
}

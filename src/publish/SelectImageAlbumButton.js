import React from 'react';
import {faAngleDown} from '@fortawesome/free-solid-svg-icons';

import {useModal} from 'modal/ModalContext';
import {LightButton} from 'common/LightButton';
import {SelectLocalImageAlbumModal} from './SelectImageAlbumModal';

export function SelectImageAlbumButton({...res}) {
  const {showModal} = useModal();

  const onPress = () => {
    showModal(<SelectLocalImageAlbumModal />);
  };

  return (
    <LightButton {...res} text="Galeria" icon={faAngleDown} onPress={onPress} />
  );
}

import React from 'react';
import {faAngleDown} from '@fortawesome/free-solid-svg-icons';

import {useModal} from 'modal/ModalContext';

import {BarButton} from './BarButton';
import {SelectLocalImageAlbumModal} from './SelectImageAlbumModal';
import {selectedAlbum} from './selectedAlbum';

export function SelectImageAlbumButton({...res}) {
  const {showModal} = useModal();

  const onPress = () => {
    showModal(<SelectLocalImageAlbumModal />);
  };

  return (
    <BarButton
      {...res}
      onPress={onPress}
      icon={faAngleDown}
      text={selectedAlbum.name}
      iconStyle={{marginRight: 2}}
    />
  );
}

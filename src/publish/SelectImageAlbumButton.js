import React from 'react';
import {faAngleDown} from '@fortawesome/free-solid-svg-icons';

import {useModal} from 'modal/ModalContext';

import {BarButton} from './BarButton';
import {SelectLocalImageAlbumModal} from './SelectImageAlbumModal';
import {useImages} from './ImagesContext';

export function SelectImageAlbumButton({...res}) {
  const {showModal} = useModal();

  const {album} = useImages();

  const onPress = () => {
    showModal(<SelectLocalImageAlbumModal />);
  };

  return (
    <BarButton
      {...res}
      text={album}
      onPress={onPress}
      icon={faAngleDown}
      iconStyle={{marginRight: 2}}
    />
  );
}

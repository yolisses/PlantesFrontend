import React from 'react';
import {faAngleDown} from '@fortawesome/free-solid-svg-icons';

import {useModal} from 'modal/ModalContext';
import {LightButton} from 'common/LightButton';
import {SelectLocalImageAlbumModal} from './SelectImageAlbumModal';

export function SelectImageAlbumButton({album, setAlbum, ...res}) {
  const {showModal} = useModal();

  const onPress = () => {
    showModal(<SelectLocalImageAlbumModal setAlbum={setAlbum} />);
  };

  return (
    <LightButton
      {...res}
      onPress={onPress}
      text={album.title}
      icon={faAngleDown}
    />
  );
}

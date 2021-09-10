import React from 'react';
import {faAngleDown} from '@fortawesome/free-solid-svg-icons';

import {useModal} from 'modal/ModalContext';

import {BarButton} from './BarButton';
import {SelectLocalImageAlbumModal} from './SelectImageAlbumModal';
import {displayAlbumTitle} from './displayAlbumName';

export function SelectImageAlbumButton({album, setAlbum, ...res}) {
  const {showModal} = useModal();

  const onPress = () => {
    showModal(<SelectLocalImageAlbumModal setAlbum={setAlbum} />);
  };

  return (
    <BarButton
      {...res}
      onPress={onPress}
      icon={faAngleDown}
      iconStyle={{marginRight: 2}}
      text={displayAlbumTitle(album.title)}
    />
  );
}

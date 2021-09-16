import React from 'react';
import {faAngleDown} from '@fortawesome/free-solid-svg-icons';

import {useModal} from 'modal/ModalContext';

import {BarButton} from './BarButton';
import {usePublish} from './PublishContext';
import {SelectLocalImageAlbumModal} from './SelectImageAlbumModal';

export function SelectImageAlbumButton({...res}) {
  const {showModal} = useModal();

  const {state} = usePublish();

  const onPress = () => {
    showModal(<SelectLocalImageAlbumModal />);
  };

  return (
    <BarButton
      {...res}
      onPress={onPress}
      icon={faAngleDown}
      iconStyle={{marginRight: 2}}
      text={state._localAlbum}
    />
  );
}

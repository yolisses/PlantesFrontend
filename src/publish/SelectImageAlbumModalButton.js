import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {TouchableOpacity} from 'react-native';

import {useModal} from 'modal/ModalContext';

import {selectedAlbum} from './selectedAlbum';
import {useObserver} from 'mobx-react-lite';

export function SelectLocalImageAlbumModalButton({album}) {
  const {closeModal} = useModal();

  const changeToAlbum = () => {
    console.error('foi aqui', album);
    selectedAlbum.name = 'album';
    console.error('pera', selectedAlbum.name);
    closeModal();
  };

  return useObserver(() => (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.wrapper}
      onPress={changeToAlbum}>
      <Text style={styles.text}>{album}</Text>
    </TouchableOpacity>
  ));
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 12,
    paddingRight: 30,
    alignSelf: 'flex-start',
  },
  text: {
    fontSize: 18,
  },
});

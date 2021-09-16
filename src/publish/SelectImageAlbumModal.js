import CameraRoll from '@react-native-community/cameraroll';
import {useModal} from 'modal/ModalContext';
import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {usePublish} from './PublishContext';

export function SelectLocalImageAlbumModal() {
  const [albums, setAlbums] = useState([]);
  const {dispatch} = usePublish();
  const {closeModal} = useModal();

  async function getAlbums() {
    CameraRoll.getAlbums({assetType: 'Photos'})
      .then(albums => {
        setAlbums(
          albums.map(album => album.title).filter(album => album !== '0'),
        );
      })
      .catch(err => console.error(err));
  }

  useEffect(() => {
    getAlbums();
  }, []);

  return (
    <ScrollView style={styles.container}>
      {albums.map(album => (
        <TouchableOpacity
          key={album}
          activeOpacity={0.8}
          style={styles.wrapper}
          onPress={() => {
            dispatch({id: '_localAlbum', value: album});
            closeModal();
          }}>
          <Text style={styles.text}>{album}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
  wrapper: {
    padding: 12,
    paddingRight: 30,
    alignSelf: 'flex-start',
  },
  text: {
    fontSize: 18,
  },
});

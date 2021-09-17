import CameraRoll from '@react-native-community/cameraroll';
import {useModal} from 'modal/ModalContext';
import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {allPhotosAlbum} from './allPhotosAlbum';
import {useImages} from './ImagesContext';

export function SelectLocalImageAlbumModal() {
  const [albums, setAlbums] = useState([]);
  const {closeModal} = useModal();

  const {setAlbum} = useImages();

  async function getAlbums() {
    CameraRoll.getAlbums({assetType: 'Photos'})
      .then(albums => {
        setAlbums(
          [allPhotosAlbum].concat(
            albums
              .map(album => album.title)
              .filter(album => album !== '0' && album !== allPhotosAlbum),
          ),
        );
      })
      .catch(err => console.error(err));
  }

  useEffect(() => {
    getAlbums();
  }, []);

  function changeToAlbum(album) {
    setAlbum(album);
    closeModal();
  }

  return (
    <ScrollView style={styles.container}>
      {albums.map(album => (
        <TouchableOpacity
          key={album}
          activeOpacity={0.8}
          style={styles.wrapper}
          onPress={() => changeToAlbum(album)}>
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

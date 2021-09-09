import CameraRoll from '@react-native-community/cameraroll';
import {useModal} from 'modal/ModalContext';
import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';
import {TouchableOpacity} from 'react-native';

export function SelectLocalImageAlbumModal({setAlbum}) {
  const [albums, setAlbums] = useState([]);
  const {closeModal} = useModal();

  const defaultAlbums = [
    {
      title: 'Galeria',
      type: 'All',
    },
  ];

  async function getAlbums() {
    CameraRoll.getAlbums({assetType: 'Photos'})
      .then(albums => {
        setAlbums(
          defaultAlbums.concat(
            albums
              .filter(album => album.title !== '0')
              .map(album => {
                return {...album, type: 'Album'};
              }),
          ),
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
          key={album.title}
          activeOpacity={0.8}
          style={styles.wrapper}
          onPress={() => {
            setAlbum(album);
            closeModal();
          }}>
          <Text style={styles.text}>{album.title}</Text>
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

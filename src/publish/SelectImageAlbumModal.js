import CameraRoll from '@react-native-community/cameraroll';
import {useModal} from 'modal/ModalContext';
import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';
import {TouchableOpacity} from 'react-native';

export function SelectLocalImageAlbumModal() {
  const [albums, setAlbums] = useState([]);
  const {closeModal} = useModal();

  async function getAlbums() {
    CameraRoll.getAlbums({assetType: 'Photos'})
      .then(albums => {
        return setAlbums(albums);
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
    margin: 14,
    alignSelf: 'flex-start',
  },
  text: {
    fontSize: 16,
  },
});

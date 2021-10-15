import CameraRoll from '@react-native-community/cameraroll';
import {useObserver} from 'mobx-react-lite';
import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {allPhotosAlbum} from './allPhotosAlbum';
import {SelectLocalImageAlbumModalButton} from './SelectImageAlbumModalButton';

export function SelectLocalImageAlbumModal() {
  const [albums, setAlbums] = useState([]);

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

  return useObserver(() => (
    <ScrollView style={styles.container}>
      {albums.map(album => (
        <SelectLocalImageAlbumModalButton key={album} album={album} />
      ))}
    </ScrollView>
  ));
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
});

import CameraRoll from '@react-native-community/cameraroll';
import React, {useEffect, useState} from 'react';
import {ScrollView, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {Modalize} from 'react-native-modalize';

export function SelectLocalImageAlbumModal() {
  const [albums, setAlbums] = useState([]);

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
    <Modalize>
      <ScrollView>
        {albums.map(album => (
          <TouchableOpacity>
            <Text>{album.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </Modalize>
  );
}

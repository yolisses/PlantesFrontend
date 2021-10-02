import React, {useEffect, useState} from 'react';
import CameraRoll from '@react-native-community/cameraroll';
import {FlatList, StyleSheet, View} from 'react-native';

import {width} from 'utils/width';

import {observe} from 'mobx';
import {useObserver} from 'mobx-react-lite';

import {allPhotosAlbum} from './allPhotosAlbum';
import {SelectableImage} from './SelectableImage';
import {SelectImageAlbumButton} from './SelectImageAlbumButton';

import {selectedAlbum} from 'publish/selectedAlbum';
import {BackButton} from './BackButton';

const numberOfCollums = 3;

export function SelectImagesScreen() {
  const [foundImages, setFoundImages] = useState([]);

  async function getPhotos() {
    CameraRoll.getPhotos({
      groupName:
        selectedAlbum.name !== allPhotosAlbum ? selectedAlbum.name : undefined,
      first: 78,
    })
      .then(res => {
        setFoundImages(res.edges.map(edge => edge.node.image.uri));
      })
      .catch(err => console.error(err));
  }

  useEffect(() => {
    observe(selectedAlbum, () => {
      getPhotos();
    });
    getPhotos();
  }, []);

  return useObserver(() => (
    <>
      <View style={{backgroundColor: 'white'}}>
        <View style={styles.wrapper}>
          <BackButton />
          <SelectImageAlbumButton style={styles.button} />
        </View>
      </View>
      <FlatList
        data={foundImages}
        numColumns={numberOfCollums}
        keyExtractor={item => item}
        showsVerticalScrollIndicator={false}
        getItemLayout={(data, index) => {
          const size = width / numberOfCollums;
          return {
            length: size,
            offset: (size * index) % numberOfCollums,
            index,
          };
        }}
        renderItem={({item: uri}) => <SelectableImage key={uri} uri={uri} />}
      />
    </>
  ));
}

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
  },
});

import {FlatList, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';

import {SelectableImage} from './SelectableImage';
import CameraRoll from '@react-native-community/cameraroll';
import {allPhotosAlbum} from './allPhotosAlbum';
import {SelectImageAlbumButton} from './SelectImageAlbumButton';
import {TakePhotoButton} from './TakePhotoButton';
import {PublishImagesPreview} from './PublishImagesPreview';
import {width} from 'utils/width';

const numberOfCollums = 3;

export function LocalImagesSelector() {
  const [album, setAlbum] = useState(allPhotosAlbum);
  const [foundImages, setFoundImages] = useState([]);
  const [images, setImages] = useState({});

  async function getPhotos() {
    CameraRoll.getPhotos({
      groupName: album !== allPhotosAlbum ? album : undefined,
      first: 100,
    })
      .then(res => {
        setFoundImages(res.edges.map(edge => edge.node.image.uri));
      })
      .catch(err => console.error(err));
  }

  useEffect(() => {
    getPhotos();
  }, [album]);

  return (
    <FlatList
      data={foundImages}
      numColumns={numberOfCollums}
      keyExtractor={item => item}
      ListHeaderComponent={
        <View style={{backgroundColor: 'white'}}>
          <PublishImagesPreview />
          <View style={styles.wrapper}>
            <SelectImageAlbumButton
              album={album}
              setAlbum={setAlbum}
              style={styles.button}
            />
            <TakePhotoButton style={styles.button} />
          </View>
        </View>
      }
      showsVerticalScrollIndicator={false}
      getItemLayout={(data, index) => {
        return {
          length: width / numberOfCollums,
          offset: ((width / numberOfCollums) * index) % numberOfCollums,
          index,
        };
      }}
      renderItem={({item: uri}) => (
        <SelectableImage
          key={uri}
          uri={uri}
          images={images}
          setImages={setImages}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'white',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

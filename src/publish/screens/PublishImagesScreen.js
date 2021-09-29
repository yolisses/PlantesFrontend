import React, {useEffect, useMemo, useState} from 'react';
import CameraRoll from '@react-native-community/cameraroll';
import {FlatList, StyleSheet, View} from 'react-native';

import {width} from 'utils/width';

import {observe} from 'mobx';
import {useObserver} from 'mobx-react-lite';

import {NextButton} from '../NextButton';
import {CustomHeader} from '../CustomHeader';
import {DiscardButton} from '../DiscardButton';
import {allPhotosAlbum} from '../allPhotosAlbum';
import {SelectableImage} from '../SelectableImage';
import {TakePhotoButton} from '../TakePhotoButton';
import {PublishImagesPreview} from '../PublishImagesPreview';
import {SelectImageAlbumButton} from '../SelectImageAlbumButton';

import {selectedAlbum} from 'publish/selectedAlbum';
import {selectedImages} from 'publish/selectedImages';
import {FooterNavigationLayout} from 'navigation/FooterNavigationLayout';

const numberOfCollums = 3;

function ValidatedHeader() {
  return useObserver(() => {
    let canContinue = false;
    for (let _ in selectedImages) {
      canContinue = true;
      break;
    }
    return (
      <CustomHeader
        title="Publicar"
        left={canContinue && <DiscardButton />}
        right={canContinue && <NextButton route="Detail" />}
      />
    );
  });
}

export function PublishImagesScreen() {
  const [foundImages, setFoundImages] = useState([]);

  async function getPhotos() {
    CameraRoll.getPhotos({
      groupName:
        selectedAlbum.name !== allPhotosAlbum ? selectedAlbum.name : undefined,
      first: 100,
    })
      .then(res => {
        setFoundImages(res.edges.map(edge => edge.node.image.uri));
      })
      .catch(err => console.error(err));
  }

  useEffect(
    () =>
      observe(selectedAlbum, () => {
        getPhotos();
      }),
    [],
  );

  return useObserver(() => (
    <FooterNavigationLayout selected="Publish">
      <ValidatedHeader />
      <FlatList
        data={foundImages}
        numColumns={numberOfCollums}
        keyExtractor={item => item}
        ListHeaderComponent={
          <View style={{backgroundColor: 'white'}}>
            <PublishImagesPreview />
            <View style={styles.wrapper}>
              <SelectImageAlbumButton style={styles.button} />
              <TakePhotoButton style={styles.button} />
            </View>
          </View>
        }
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
    </FooterNavigationLayout>
  ));
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'white',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

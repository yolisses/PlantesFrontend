import React, {useEffect, useMemo, useState} from 'react';
import CameraRoll from '@react-native-community/cameraroll';
import {Button, FlatList, StyleSheet, View} from 'react-native';

import {width} from 'utils/width';

import {NextButton} from '../NextButton';
import {CustomHeader} from '../CustomHeader';
import {DiscardButton} from '../DiscardButton';
import {allPhotosAlbum} from '../allPhotosAlbum';
import {SelectableImage} from '../SelectableImage';
import {TakePhotoButton} from '../TakePhotoButton';
import {useShallowData} from '../ShallowDataContext';
import {PublishImagesPreview} from '../PublishImagesPreview';
import {SelectImageAlbumButton} from '../SelectImageAlbumButton';

import {FooterNavigationLayout} from 'navigation/FooterNavigationLayout';
import {selectedImages} from 'publish/selectedImages';
import {selectedAlbum} from 'publish/selectedAlbum';
import {searchOptions} from 'search/searchOptions';

const numberOfCollums = 3;

function ValidatedHeader() {
  let canContinue = false;
  for (let _ in selectedImages) {
    canContinue = true;
    break;
  }

  return useMemo(
    () => (
      <CustomHeader
        title="Publicar"
        left={canContinue && <DiscardButton />}
        right={canContinue && <NextButton route="Detail" />}
      />
    ),
    [canContinue],
  );
}

export function PublishImagesScreen() {
  const {data} = useShallowData();
  const [foundImages, setFoundImages] = useState([]);

  async function getPhotos() {
    CameraRoll.getPhotos({
      groupName: selectedAlbum !== allPhotosAlbum ? selectedAlbum : undefined,
      first: 100,
    })
      .then(res => {
        setFoundImages(res.edges.map(edge => edge.node.image.uri));
      })
      .catch(err => console.error(err));
  }

  useEffect(() => {
    getPhotos();
  }, [selectedAlbum]);

  return (
    <FooterNavigationLayout selected="Publish">
      <ValidatedHeader />
      <Button onPress={() => (selectedAlbum.sell = 'mas')} title="teste" />
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
        renderItem={({item: uri}) => (
          <SelectableImage
            key={uri}
            uri={uri}
            id="images"
            data={data}
            setImages={setImages}
          />
        )}
      />
    </FooterNavigationLayout>
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

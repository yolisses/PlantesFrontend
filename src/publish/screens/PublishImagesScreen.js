import {FlatList, StyleSheet, View} from 'react-native';
import React, {useEffect, useMemo, useState} from 'react';

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

import CameraRoll from '@react-native-community/cameraroll';

const numberOfCollums = 3;

function ValidatedHeader({images}) {
  let canContinue = false;
  for (let image in images) {
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
  const [album, setAlbum] = useState(allPhotosAlbum);
  const [foundImages, setFoundImages] = useState([]);
  const [images, setImages] = useState({});
  const {data} = useShallowData();

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
    <FooterNavigationLayout selected="Publish">
      <ValidatedHeader images={images} />
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
          const size = width / numberOfCollums;
          return {
            length: size,
            offset: (size * index) % numberOfCollums,
            index,
          };
        }}
        renderItem={({item: uri}) => (
          <SelectableImage
            id="images"
            data={data}
            key={uri}
            uri={uri}
            images={images}
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

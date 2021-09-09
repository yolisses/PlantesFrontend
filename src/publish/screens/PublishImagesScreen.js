import React, {useState} from 'react';
import {SectionList, StyleSheet, View} from 'react-native';

import {ImagesSwiper} from 'show/ImagesSwiper';
import {useImageGroup} from 'camera/ImageGroupContext';
import {TakePhotoButton} from 'publish/TakePhotoButton';
import {LocalImagesSelector} from 'publish/LocalImagesSelector';
import {SelectImageAlbumButton} from 'publish/SelectImageAlbumButton';
import {ChooseImagesPlaceholder} from 'publish/ChooseImagesPlaceholder';
import {FooterNavigationLayout} from 'navigation/FooterNavigationLayout';
import {PublishScreenLayout} from './PublishScreenLayout';
import {DiscardButton} from 'publish/DiscardButton';

export function PublishImagesScreen() {
  const {images, thereIsSomeImage} = useImageGroup();
  const layout = [
    {id: 0, data: []},
    {id: 1, data: ['images']},
  ];

  const [album, setAlbum] = useState({title: 'Galeria', type: 'All'});

  return (
    <PublishScreenLayout
      hideBar
      headerLeft={thereIsSomeImage ? <DiscardButton /> : null}>
      <FooterNavigationLayout selected="Publish">
        <View>
          <SectionList
            sections={layout}
            stickyHeaderIndices={[1]}
            stickySectionHeadersEnabled
            renderSectionHeader={({section}) => {
              if (section.id === 0) {
                return (
                  <View style={{backgroundColor: 'white'}}>
                    {thereIsSomeImage ? (
                      <ImagesSwiper images={images} />
                    ) : (
                      <ChooseImagesPlaceholder />
                    )}
                  </View>
                );
              } else {
                return (
                  <View style={styles.wrapper}>
                    <SelectImageAlbumButton
                      album={album}
                      setAlbum={setAlbum}
                      style={styles.button}
                    />
                    <TakePhotoButton style={styles.button} />
                  </View>
                );
              }
            }}
            renderItem={() => <LocalImagesSelector album={album} />}
          />
          <ImagesSwiper />
        </View>
      </FooterNavigationLayout>
    </PublishScreenLayout>
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

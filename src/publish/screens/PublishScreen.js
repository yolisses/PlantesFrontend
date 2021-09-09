import React from 'react';
import {SectionList, StyleSheet, View} from 'react-native';
import {LocalImagesSelector} from './LocalImagesSelector';

import {ImagesSwiper} from 'show/ImagesSwiper';
import {useImageGroup} from 'camera/ImageGroupContext';
import {TakePhotoButton} from 'publish/TakePhotoButton';
import {SelectImageAlbumButton} from 'publish/SelectImageAlbumButton';
import {ChooseImagesPlaceholder} from 'publish/ChooseImagesPlaceholder';
import {FooterNavigationLayout} from 'navigation/FooterNavigationLayout';

export function PublishScreen() {
  const {images, thereIsSomeImage} = useImageGroup();
  const layout = [
    {id: 0, data: []},
    {id: 1, data: ['images']},
  ];

  return (
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
                  <SelectImageAlbumButton style={styles.button} />
                  <TakePhotoButton style={styles.button} />
                </View>
              );
            }
          }}
          renderItem={() => <LocalImagesSelector />}
        />
        <ImagesSwiper />
      </View>
    </FooterNavigationLayout>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'white',
    alignItems: 'center',
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    elevation: 0,
    paddingHorizontal: 30,
    paddingVertical: 15,
  },
});

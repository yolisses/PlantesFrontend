import React, {useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';

import {observe} from 'mobx';
import {faTimes} from '@fortawesome/free-solid-svg-icons';

import {width} from 'utils/width';
import {BackButton} from 'common/BackButton';
import {NextButton} from 'common/NextButton';
import {CustomHeader} from 'common/CustomHeader';
import {selectedAlbum} from 'images/selectedAlbum';
import {SelectableImage} from 'images/SelectableImage';
import {getSelectedAlbumPhotos} from 'images/getSelectedAlbumPhotos';
import {SelectImageAlbumButton} from 'images/SelectImageAlbumButton';

const numberOfCollums = 3;

export function SelectImagesScreen() {
  const [foundImages, setFoundImages] = useState<string[]>([]);
  const [imagesObj, setImagesObj] = useState<ListObj>({});

  async function getPhotos() {
    const found = await getSelectedAlbumPhotos();
    setFoundImages(found);
  }

  useEffect(() => {
    observe(selectedAlbum, getPhotos);
    getPhotos();
  }, []);

  return (
    <>
      <View style={{backgroundColor: 'white'}}>
        <CustomHeader
          left={<BackButton icon={faTimes} />}
          center={<SelectImageAlbumButton />}
          right={<NextButton text="Pronto" hideIcon />}
        />
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
        renderItem={({item: uri}) => (
          <SelectableImage
            key={uri}
            uri={uri}
            imagesLimit={10}
            index={imagesObj[uri]}
            setImagesObj={setImagesObj}
          />
        )}
      />
    </>
  );
}

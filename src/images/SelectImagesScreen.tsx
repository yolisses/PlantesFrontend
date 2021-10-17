import {FlatList, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/core';

import {observe} from 'mobx';
import {faTimes} from '@fortawesome/free-solid-svg-icons';

import {width} from 'utils/width';
import {BackButton} from 'common/BackButton';
import {NextButton} from 'common/NextButton';
import {imagesAux} from 'images/openImagePicker';
import {CustomHeader} from 'common/CustomHeader';
import {selectedAlbum} from 'images/selectedAlbum';
import {SelectableImage} from 'images/SelectableImage';
import {getSelectedAlbumPhotos} from 'images/getSelectedAlbumPhotos';
import {SelectImageAlbumButton} from 'images/SelectImageAlbumButton';
const numberOfCollums = 3;

export function SelectImagesScreen({route}) {
  const [foundImages, setFoundImages] = useState<string[]>([]);
  const [imagesObj, setImagesObj] = useState<ImagesObj>({
    ...route.params?.initialValue,
  });

  async function getPhotos() {
    const found = await getSelectedAlbumPhotos();
    setFoundImages(found);
  }

  useEffect(() => {
    observe(selectedAlbum, getPhotos);
    getPhotos();
  }, []);

  const {goBack} = useNavigation();

  function onFinishPress() {
    imagesAux.onFinish(imagesObj);
    goBack();
  }

  return (
    <>
      <View style={{backgroundColor: 'white'}}>
        <CustomHeader
          left={<BackButton icon={faTimes} />}
          center={<SelectImageAlbumButton />}
          right={<NextButton hideIcon text="Pronto" onPress={onFinishPress} />}
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
            setImagesObj={setImagesObj}
            index={imagesObj[uri]?.index}
          />
        )}
      />
    </>
  );
}

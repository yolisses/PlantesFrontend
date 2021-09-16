import {FlatList, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import CameraRoll from '@react-native-community/cameraroll';

import {width} from 'utils/width';
import {SelectableImage} from './SelectableImage';
import {usePublish} from './PublishContext';

const numberOfCollums = 3;

export function LocalImagesSelector({album, flatListHeader}) {
  const [foundImages, setFoundImages] = useState([]);

  const {state, dispatch} = usePublish();
  const images = state.images || {};

  function getImages() {
    CameraRoll.getPhotos({
      first: 20,
      groupTypes: album.type,
      groupName: album.type !== 'All' ? album.title : undefined,
      include: ['location'],
    })
      .then(a => {
        setFoundImages(a.edges.map(item => item.node.image));
      })
      .catch(err => console.error(err));
  }

  useEffect(() => {
    getImages();
  }, [album]);

  return (
    <>
      <FlatList
        data={foundImages}
        numColumns={numberOfCollums}
        keyExtractor={item => item.uri}
        ListHeaderComponent={flatListHeader}
        showsVerticalScrollIndicator={false}
        getItemLayout={(data, index) => {
          return {
            length: width / numberOfCollums,
            offset: ((width / numberOfCollums) * index) % numberOfCollums,
            index,
          };
        }}
        renderItem={({item: {uri}}) => {
          return (
            <SelectableImage
              uri={uri}
              images={images}
              dispatch={dispatch}
              active={images[uri]}
            />
          );
        }}
      />
    </>
  );
}

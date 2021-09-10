import {FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import CameraRoll from '@react-native-community/cameraroll';

import {width} from 'utils/width';
import {SelectableImage} from './SelectableImage';

const numberOfCollums = 3;

export function LocalImagesSelector({album, value, name}) {
  const [images, setImages] = useState([]);

  function getImages() {
    CameraRoll.getPhotos({
      first: 20,
      groupTypes: album.type,
      groupName: album.type !== 'All' ? album.title : undefined,
      include: ['location'],
    })
      .then(a => {
        setImages(a.edges);
      })
      .catch(err => console.error(err));
  }

  useEffect(() => {
    getImages();
  }, [album]);

  return (
    <FlatList
      numColumns={numberOfCollums}
      data={images}
      getItemLayout={(data, index) => {
        return {
          length: width / numberOfCollums,
          offset: ((width / numberOfCollums) * index) % numberOfCollums,
          index,
        };
      }}
      keyExtractor={item => item.node.image.uri}
      renderItem={({item}) => (
        <SelectableImage name={name} uri={item.node.image.uri} />
      )}
    />
  );
}

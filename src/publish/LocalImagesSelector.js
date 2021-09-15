import {FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import CameraRoll from '@react-native-community/cameraroll';

import {width} from 'utils/width';
import {SelectableImage} from './SelectableImage';

const numberOfCollums = 3;

export function LocalImagesSelector({album, flatListHeader}) {
  const [images, setImages] = useState([]);

  function getImages() {
    CameraRoll.getPhotos({
      first: 20,
      groupTypes: album.type,
      groupName: album.type !== 'All' ? album.title : undefined,
      include: ['location'],
    })
      .then(a => {
        setImages(a.edges.map(item => item.node.image));
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
      ListHeaderComponent={flatListHeader}
      keyExtractor={item => item.uri}
      renderItem={({item}) => <SelectableImage {...item} uri={item.uri} />}
    />
  );
}

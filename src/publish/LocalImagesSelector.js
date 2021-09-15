import {FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import CameraRoll from '@react-native-community/cameraroll';

import {width} from 'utils/width';
import {SelectableImage} from './SelectableImage';
import {usePublish} from './contexts/PublishContext';

const numberOfCollums = 3;

export function LocalImagesSelector({album, flatListHeader}) {
  const [foundImages, setFoundImages] = useState([]);

  const {images} = usePublish();

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
    <FlatList
      numColumns={numberOfCollums}
      data={foundImages}
      getItemLayout={(data, index) => {
        return {
          length: width / numberOfCollums,
          offset: ((width / numberOfCollums) * index) % numberOfCollums,
          index,
        };
      }}
      ListHeaderComponent={flatListHeader}
      keyExtractor={item => item.uri}
      renderItem={({item}) => {
        return (
          <SelectableImage
            {...item}
            uri={item.uri}
            push={images.push}
            remove={images.remove}
            index={images.indexOf(item.uri)}
          />
        );
      }}
    />
  );
}

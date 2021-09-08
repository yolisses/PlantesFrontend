import React, {useEffect, useState} from 'react';
import CameraRoll from '@react-native-community/cameraroll';
import {Dimensions, FlatList} from 'react-native';
import FastImage from 'react-native-fast-image';

const {width} = Dimensions.get('window');

export function LocalImagesSelector() {
  const numberOfCollums = 4;
  const [images, setImages] = useState([]);

  async function getImages() {
    CameraRoll.getPhotos({first: 50})
      .then(a => {
        return setImages(a.edges);
      })
      .catch(err => console.error(err));
  }

  useEffect(() => {
    getImages();
  }, []);

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
        <FastImage
          key={item.node.image.uri}
          style={{
            width: width / numberOfCollums - 1 / numberOfCollums,
            aspectRatio: 1,
            marginRight: 1,
            marginBottom: 1,
          }}
          source={{uri: item.node.image.uri}}
        />
      )}
    />
  );
}

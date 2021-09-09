import React, {useEffect, useState} from 'react';
import CameraRoll from '@react-native-community/cameraroll';
import {FlatList} from 'react-native';
import FastImage from 'react-native-fast-image';
import {StyleSheet} from 'react-native';
import {width} from 'utils/width';
const numberOfCollums = 3;

export function LocalImagesSelector({album}) {
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
        <FastImage
          key={item.node.image.uri}
          style={style.image}
          source={{uri: item.node.image.uri}}
        />
      )}
    />
  );
}

const style = StyleSheet.create({
  image: {
    width: width / numberOfCollums - 1 / numberOfCollums,
    aspectRatio: 1,
    marginRight: 1,
    marginBottom: 1,
  },
});

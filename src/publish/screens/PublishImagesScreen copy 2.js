import React, {useEffect, useState} from 'react';
import CameraRoll from '@react-native-community/cameraroll';
import {Dimensions, FlatList, Image, Text, View} from 'react-native';
import {SquareImage} from 'common/SquareImage';
import FastImage from 'react-native-fast-image';

const {width} = Dimensions.get('window');

export function PublishImagesScreen() {
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
    <View>
      <Text>Hello {Math.random()}</Text>
      <FlatList
        numColumns={3}
        data={images}
        getItemLayout={(data, index) => {
          return {length: width / 3, offset: ((width / 3) * index) % 3, index};
        }}
        keyExtractor={item => item.node.image.uri}
        renderItem={({item}) => (
          // <>
          //   {console.error(Object.keys(item.node.image))}
          //   <Text>{'' + Object.keys(item.node.image)}</Text>
          <FastImage
            key={item.node.image.uri}
            // fraction={3}

            style={{
              width: width / 3 - 1 / 3,
              aspectRatio: 1,
              marginRight: 1,
              marginBottom: 1,
            }}
            source={{uri: item.node.image.uri}}
          />
          // </>
        )}
      />
    </View>
  );
}

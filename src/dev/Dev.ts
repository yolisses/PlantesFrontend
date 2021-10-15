import {useNavigation} from '@react-navigation/core';
import React, {useState} from 'react';
import {Button, FlatList, ScrollView, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {SquareImage} from '../common/SquareImage';
import {getNewImageByLocalUri} from '../send/getNewImageByLocalUri';
import {width} from '../utils/width';

export function Dev() {
  const [imagesObj, setImagesObj] = useState({});
  const [preview, setPreview] = useState();
  const images = Object.keys(imagesObj);

  const {navigate} = useNavigation();

  function onSelectPress() {
    navigate('Images', {onChange: setImagesObj, value: imagesObj});
  }

  async function onCompressPress() {
    const res = await getNewImageByLocalUri(images[0]);
    setPreview(res.localUri);
  }

  return (
    <ScrollView>
      <Text>Dev</Text>
      <FlatList
        data={images}
        numColumns={4}
        renderItem={({item}) => <SquareImage fraction={4} uri={item} />}
      />
      <FastImage
        source={{uri: preview}}
        style={{width: width / 2, height: 2 * width, backgroundColor: 'red'}}
      />
      <Button title="select image" onPress={onSelectPress} />
      <Button title="compress first" onPress={onCompressPress} />
    </ScrollView>
  );
}

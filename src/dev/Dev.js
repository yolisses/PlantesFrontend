import {useNavigation} from '@react-navigation/core';
import React, {useState} from 'react';
import {Button, FlatList, Text, View} from 'react-native';
import {SquareImage} from '../common/SquareImage';

export function Dev() {
  const [imagesObj, setImagesObj] = useState({});

  const {navigate} = useNavigation();

  function onPress() {
    navigate('Images', {onChange: setImagesObj, value: imagesObj});
  }

  const images = Object.keys(imagesObj);

  return (
    <View>
      <Text>Dev</Text>
      <FlatList
        data={images}
        numColumns={4}
        renderItem={({item}) => <SquareImage fraction={4} uri={item} />}
      />
      <Button title="select image" onPress={onPress} />
      <Button title="compress first" onPress={onPress} />
    </View>
  );
}

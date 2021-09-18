import {useQuery, useEffect, gql} from '@apollo/client';
import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import {width} from 'utils/width';

const PLANTS = gql`
  query {
    getUploadUrl
  }
`;

export function SendSomeImage() {
  const {loading, error, data} = useQuery(PLANTS);

  const file = {
    uri: 'file:///storage/emulated/0/Tranks.jpg',
  };

  function onPress() {
    console.error('press');
    fetch(data.getUploadUrl, {
      method: 'PUT',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      body: file,
    })
      .then(res => console.error(res))
      .catch(err => console.error(err));
  }

  return (
    <View>
      <FastImage
        style={styles.image}
        source={{uri: 'file:///storage/emulated/0/Tranks.jpg'}}
      />
      <Text>{JSON.stringify(loading)}</Text>
      <Text>{JSON.stringify(error)}</Text>
      <Text>{JSON.stringify(data)}</Text>
      <TouchableOpacity onPress={onPress}>
        <Text>Enviar (ou não)</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width,
    height: width,
  },
});

import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import {width} from 'utils/width';

export function SendSomeImage() {
  const file = {
    uri: 'file:///storage/emulated/0/Tranks.jpg',
  };

  function onPress() {
    console.error('press');
    fetch(url, {
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

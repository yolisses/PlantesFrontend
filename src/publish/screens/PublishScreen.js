import React from 'react';
import {Button, View} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

export function PublishScreen() {
  function onPress() {
    ImagePicker.openPicker({
      width: 200,
      height: 200,
      cropping: true,
    }).then(image => {
      console.error(image);
    });
  }

  return (
    <View>
      <Button title="open" onPress={onPress} />
    </View>
  );
}

import {SquareImage} from 'common/SquareImage';
import React from 'react';
import {Button, View} from 'react-native';
import ImageCropPicker from 'react-native-image-crop-picker';

export function Dev() {
  async function onPress() {
    try {
      const res = await ImageCropPicker.openCropper({
        path: 'file:///storage/emulated/0/Pictures/Plantei/aa93d3b1-1a08-4350-a236-89002445cf5c.jpg',
        multiple: true,
      });
      console.error(res);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <View>
      <SquareImage uri="file:///data/data/com.plantes/cache/8529512e-571e-424e-9bd0-a91fb57a6107.WEBP" />
      {/* <SquareImage uri="file:///storage/emulated/0/Pictures/Plantei/aa93d3b1-1a08-4350-a236-89002445cf5c.jpg" /> */}
      <Button title="coisa" onPress={onPress} />
    </View>
  );
}

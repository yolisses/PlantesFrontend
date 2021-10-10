import {SquareImage} from 'common/SquareImage';
import React from 'react';
import {Button, View} from 'react-native';
import ImageResizer from 'react-native-image-resizer';

export function Dev() {
  async function onPress() {
    try {
      const maxWidth = 400;
      const maxHeight = 400;
      const outputPath = 'file:///storage/emulated/0/Pictures/Plantei/';
      const quality = 100;
      const rotation = 0;
      const compressFormat = 'WEBP';
      const path =
        'storage/emulated/0/Pictures/Plantei/aa93d3b1-1a08-4350-a236-89002445cf5c.jpg';

      const res = await ImageResizer.createResizedImage(
        path,
        maxWidth,
        maxHeight,
        compressFormat,
        quality,
        rotation,
        undefined,
        {onlyScaleDown: true},
      );
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

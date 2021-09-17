import React, {useMemo} from 'react';
import FastImage from 'react-native-fast-image';

import {Pressable, StyleSheet, Text, View} from 'react-native';

import {width} from 'utils/width';
import {SelectableImageNumber} from './SelectableImageNumber';
import {useAlert} from 'alert/AlertContext';
import {ImagesLimitAlert} from './ImagesLimitAlert';
import {RerenderTester} from 'dev/rerenderTester';
const numberOfCollums = 3;

export function SelectableImage({uri, images, setImages, imagesReachedLimit}) {
  const {showAlert} = useAlert();

  function getImageIndex(uri) {
    return images[uri];
  }

  function pushImage(uri) {
    setImages(images => {
      const copy = {};
      let counter = 1;
      for (let item in images) {
        copy[item] = counter;
        counter++;
      }
      copy[uri] = counter;
      return copy;
    });
  }

  function removeImage(uri) {
    setImages(images => {
      const copy = {};
      let counter = 1;
      for (let item in images) {
        if (item === uri) {
          continue;
        }
        copy[item] = counter;
        counter++;
      }
      return copy;
    });
  }

  function onPress() {
    if (!index) {
      if (imagesReachedLimit) {
        showAlert(<ImagesLimitAlert />);
        return;
      }
      pushImage(uri);
    } else {
      removeImage(uri);
    }
  }

  const index = getImageIndex(uri);

  return useMemo(
    () => (
      <Pressable onPress={onPress}>
        <FastImage
          style={[styles.image, index && styles.selected]}
          source={{uri}}
        />
        {!!index && (
          <View style={styles.numberWrapper}>
            <SelectableImageNumber number={index} />
          </View>
        )}
        <RerenderTester />
      </Pressable>
    ),
    [index],
  );
}

const styles = StyleSheet.create({
  image: {
    width: width / numberOfCollums - 1 / numberOfCollums,
    aspectRatio: 1,
    marginRight: 1,
    marginBottom: 1,
  },
  selected: {
    borderWidth: 3,
    borderColor: '#0a0',
    borderStyle: 'solid',
  },
  numberWrapper: {
    top: 4,
    right: 4,
    zIndex: 100,
    position: 'absolute',
  },
});

import React, {useMemo} from 'react';
import FastImage from 'react-native-fast-image';

import {StyleSheet, TouchableOpacity, View} from 'react-native';

import {width} from 'utils/width';
import {SelectableImageNumber} from './SelectableImageNumber';
import {useAlert} from 'alert/AlertContext';
import {ImagesLimitAlert} from './ImagesLimitAlert';
import {imagesLimit} from './imagesLimit';
const numberOfCollums = 3;

export function SelectableImage({
  id,
  uri,
  data,
  images,
  refresh,
  setImages,
  imagesReachedLimit,
}) {
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
      if (counter > imagesLimit) {
        showAlert(<ImagesLimitAlert />);
        return images;
      }
      copy[uri] = counter;
      data[id] = copy;
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
      data[id] = copy;
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
      <TouchableOpacity onPress={onPress} activeOpacity={0.9}>
        <View style={styles.wrapper}>
          <FastImage
            style={[styles.image, index && styles.selected]}
            source={{uri}}
          />
          {!!index && (
            <View style={styles.numberWrapper}>
              <SelectableImageNumber number={index} />
            </View>
          )}
        </View>
      </TouchableOpacity>
    ),
    [index, refresh],
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginRight: 1,
    marginBottom: 1,
  },
  image: {
    width: width / numberOfCollums - 1 / numberOfCollums,
    aspectRatio: 1,
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

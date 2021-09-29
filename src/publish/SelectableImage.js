import React from 'react';
import FastImage from 'react-native-fast-image';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

import {useObserver} from 'mobx-react-lite';

import {imagesLimit} from './imagesLimit';
import {selectedImages} from './selectedImages';
import {ImagesLimitAlert} from './ImagesLimitAlert';
import {SelectableImageNumber} from './SelectableImageNumber';

import {width} from 'utils/width';
import {useAlert} from 'alert/AlertContext';

const numberOfCollums = 3;

export function SelectableImage({uri, imagesReachedLimit}) {
  const {showAlert} = useAlert();

  function pushImage(uri) {
    let counter = Object.keys(selectedImages).length + 1;
    if (counter > imagesLimit) {
      showAlert(<ImagesLimitAlert />);
      return;
    }
    selectedImages[uri] = counter;
  }

  function removeImage(uri) {
    delete selectedImages[uri];
    let counter = 1;
    for (let key in selectedImages) {
      selectedImages[key] = counter;
      counter += 1;
    }
  }

  function onPress() {
    if (!selectedImages[uri]) {
      if (imagesReachedLimit) {
        showAlert(<ImagesLimitAlert />);
        return;
      }
      pushImage(uri);
    } else {
      removeImage(uri);
    }
  }

  return useObserver(() => (
    <TouchableOpacity onPress={onPress} activeOpacity={0.9}>
      <View style={styles.wrapper}>
        <FastImage
          style={[styles.image, selectedImages[uri] && styles.selected]}
          source={{uri}}
        />
        {!!selectedImages[uri] && (
          <View style={styles.numberWrapper}>
            <SelectableImageNumber number={selectedImages[uri]} />
          </View>
        )}
      </View>
    </TouchableOpacity>
  ));
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

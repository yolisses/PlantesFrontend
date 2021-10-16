import React, {useMemo} from 'react';
import FastImage from 'react-native-fast-image';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

import {width} from 'utils/width';
import {getObjectLength} from 'utils/getObjectLength';
import {SelectableImageNumber} from 'images/SelectableImageNumber';
import {ImagesLimitAlert} from './ImagesLimitAlert';
import {alert} from 'alert/alert';

const numberOfCollums = 3;

interface Props {
  uri: string;
  index?: number;
  imagesLimit: number;
  setImagesObj: React.Dispatch<React.SetStateAction<ListObj>>;
}

export function SelectableImage({
  uri,
  index,
  imagesLimit,
  setImagesObj,
}: Props) {
  function pushImage(old) {
    let counter = getObjectLength(old) + 1;
    if (imagesLimit && counter > imagesLimit) {
      alert.showAlert(<ImagesLimitAlert imagesLimit={imagesLimit} />);
      return old;
    }
    const newValue = {...old};
    newValue[uri] = counter;
    return newValue;
  }

  function removeImage(old) {
    const newValue = {...old};
    delete newValue[uri];
    let counter = 1;
    for (let key in newValue) {
      newValue[key] = counter;
      counter += 1;
    }
    return newValue;
  }

  function onPress() {
    setImagesObj(old => {
      if (!old[uri]) {
        return pushImage(old);
      } else {
        return removeImage(old);
      }
    });
  }

  return useMemo(
    () => (
      <TouchableOpacity onPress={onPress} activeOpacity={0.9}>
        <View style={styles.wrapper}>
          <FastImage
            style={[styles.image, !!index && styles.selected]}
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
    [index],
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

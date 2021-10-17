import React, {useMemo} from 'react';
import FastImage from 'react-native-fast-image';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

import {width} from 'utils/width';
import {useAlert} from '../alert/AlertContext';
import {ImagesLimitAlert} from './ImagesLimitAlert';
import {pushImageInObject} from './pushImageInObject';
import {removeImageInObject} from './removeImageInObject';
import {SelectableImageNumber} from 'images/SelectableImageNumber';

const numberOfCollums = 3;

interface Props {
  uri: string;
  index?: number;
  imagesLimit: number;
  setImagesObj: React.Dispatch<React.SetStateAction<ImagesObj>>;
}

export function SelectableImage({
  uri,
  index,
  imagesLimit,
  setImagesObj,
}: Props) {
  const {showAlert} = useAlert();
  function limitCallback() {
    showAlert(<ImagesLimitAlert imagesLimit={imagesLimit} />);
  }

  function togleSelection(old) {
    if (!old[uri]) {
      return pushImageInObject(old, uri, imagesLimit, limitCallback);
    } else {
      return removeImageInObject(old, uri);
    }
  }

  function onPress() {
    setImagesObj(togleSelection);
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

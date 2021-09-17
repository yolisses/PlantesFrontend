import React, {useMemo} from 'react';
import FastImage from 'react-native-fast-image';

import {Pressable, StyleSheet, Text, View} from 'react-native';

import {width} from 'utils/width';
import {SelectableImageNumber} from './SelectableImageNumber';
import {useAlert} from 'alert/AlertContext';
import {ImagesLimitAlert} from './ImagesLimitAlert';
import {RerenderTester} from 'dev/rerenderTester';
const numberOfCollums = 3;

export function SelectableImage({uri, index, pushImage, imagesReachedLimit}) {
  const {showAlert} = useAlert();

  return (
    <Pressable
      onPress={() => {
        if (!index) {
          if (imagesReachedLimit) {
            showAlert(<ImagesLimitAlert />);
            return;
          }
          pushImage(uri);
          // dispatch({id: ['images', uri], type: 'setWithIndex'});
          // dispatch({id: '_localRefreshImagesPreview', value: uri + '+'});
        } else {
          // dispatch({id: ['images', uri], type: 'deleteSettingIndexes'});
          // dispatch({id: '_localRefreshImagesPreview', value: uri + '-'});
        }
      }}>
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

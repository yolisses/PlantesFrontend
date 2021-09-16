import React, {useMemo} from 'react';
import FastImage from 'react-native-fast-image';

import {Pressable, StyleSheet, Text, View} from 'react-native';

import {width} from 'utils/width';
import {SelectableImageNumber} from './SelectableImageNumber';
import {useAlert} from 'alert/AlertContext';
import {ImagesLimitAlert} from './ImagesLimitAlert';
import {usePublish} from './PublishContext';
import {UriTester} from 'dev/uriTester';

const numberOfCollums = 3;

export function SelectableImage({uri, imagesReachedLimit}) {
  const {showAlert} = useAlert();

  const {state, dispatch} = usePublish();
  const images = state.images || {};

  const getImageIndex = uri =>
    images[uri] ? Object.keys(images).indexOf(uri) + 1 : null;
  const index = getImageIndex(uri);

  return useMemo(
    () => (
      <Pressable
        onPress={function () {
          if (!index) {
            if (imagesReachedLimit) {
              showAlert(<ImagesLimitAlert />);
              return;
            }
            dispatch({id: ['images', uri], value: true});
            dispatch({id: '_localRefreshImagesPreview', value: uri + '+'});
          } else {
            dispatch({id: ['images', uri], type: 'delete'});
            dispatch({id: '_localRefreshImagesPreview', value: uri + '-'});
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
        <UriTester uri={uri} />
      </Pressable>
    ),
    [index, imagesReachedLimit, state._localRefreshImageSelector],
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

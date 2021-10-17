import React from 'react';
import {TouchableOpacity} from 'react-native';
import {StyleSheet, View} from 'react-native';
import FastImage from 'react-native-fast-image';

import {faTimes} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

import {basicHitSlop} from 'utils/basicHitSlop';
import {removeImageInObject} from './removeImageInObject';

interface SelectImagesItem {
  uri: string;
  onChange: (value: any) => void;
}

export function SelectImagesItem({uri, onChange}: SelectImagesItem) {
  function onRemovePress() {
    onChange(old => removeImageInObject(old, uri));
  }

  return (
    <View>
      <TouchableOpacity
        hitSlop={basicHitSlop}
        onPress={onRemovePress}
        style={styles.closeButton}>
        <FontAwesomeIcon icon={faTimes} size={18} color="#fff" />
      </TouchableOpacity>
      <FastImage source={{uri}} style={styles.image} key={uri} />
    </View>
  );
}

const offset = 2;

const styles = StyleSheet.create({
  closeButton: {
    borderRadius: 100,
    backgroundColor: '#0008',
    padding: 8,
    right: 3,
    top: 3,

    position: 'absolute',
    zIndex: 10,
  },
  image: {
    height: 160,
    aspectRatio: 1,
    borderRadius: 10,
    margin: offset,
  },
});

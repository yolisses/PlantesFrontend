import {faTimes} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {basicHitSlop} from 'common/basicHitSlop';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {StyleSheet, View} from 'react-native';
import FastImage from 'react-native-fast-image';

export function SelectImagesItem({uri, onChange}) {
  function removeImage({value, uri}) {
    const newValue = {...value};
    delete newValue[uri];
    let counter = 1;
    for (let key in newValue) {
      newValue[key] = counter;
      counter += 1;
    }
    return newValue;
  }

  function onRemovePress() {
    onChange(value => removeImage({uri, value}));
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        hitSlop={basicHitSlop}
        onPress={onRemovePress}
        style={styles.closeButton}>
        <FontAwesomeIcon icon={faTimes} size={18} color="#fff" />
      </TouchableOpacity>
      <FastImage source={{uri}} fraction={4} style={styles.image} key={uri} />
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

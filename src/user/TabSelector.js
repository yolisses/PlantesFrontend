import React from 'react';
import {
  faImage,
  faSeedling,
  faThumbsUp,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {StyleSheet, View} from 'react-native';

export function TabSelector() {
  return (
    <View style={styles.container}>
      <FontAwesomeIcon icon={faSeedling} size={20} color={'#bbb'} />
      <FontAwesomeIcon icon={faImage} size={20} color={'#bbb'} />
      <FontAwesomeIcon icon={faThumbsUp} size={20} color={'#bbb'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: 'white',
    justifyContent: 'space-around',
  },
});

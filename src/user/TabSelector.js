import React from 'react';
import {
  faImage,
  faSeedling,
  faThumbsUp,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {StyleSheet, View} from 'react-native';

export function TabSelector() {
  const size = 22;
  return (
    <View style={styles.container}>
      <FontAwesomeIcon icon={faSeedling} size={size} color={'#bbb'} />
      <FontAwesomeIcon icon={faImage} size={size} color={'#bbb'} />
      <FontAwesomeIcon icon={faThumbsUp} size={size} color={'#bbb'} />
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

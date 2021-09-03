import {faTimes} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {mockImageLink} from './mock/mockImageLink';

export function ChatItemReference({showCloseButton}) {
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <FastImage source={{uri: mockImageLink}} style={styles.image} />
        <View style={styles.titleSubtitleContainer}>
          {showCloseButton && (
            <FontAwesomeIcon
              size={10}
              icon={faTimes}
              style={styles.closeOption}
              color={'#aaa'}
            />
          )}
          <Text
            style={[styles.title, showCloseButton && {paddingRight: 10}]}
            numberOfLines={1}>
            Costela de Adão Costela de Adão Costela de Adão
          </Text>
          <Text style={styles.subtitle} numberOfLines={2}>
            <Text>Doação</Text>,<Text> Trocar</Text> ou
            <Text> R$100,00</Text>
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    minWidth: 250,
  },
  inner: {
    borderRadius: 9,
    elevation: 1,
    flexDirection: 'row',
    backgroundColor: '#00000008',
  },
  image: {
    backgroundColor: '#ccc',
    width: 75,
    aspectRatio: 1,
    borderRadius: 9,
  },
  titleSubtitleContainer: {
    paddingHorizontal: 5,
    overflow: 'hidden',
    paddingVertical: 2,
    justifyContent: 'center',
    flex: 1,
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
  },
  closeOption: {
    position: 'absolute',
    top: 0,
    right: 0,
    margin: 4,
    padding: 9,
    borderRadius: 100,
  },
});

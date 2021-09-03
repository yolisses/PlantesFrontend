import {faTimes} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {mockImageLink} from './mock/mockImageLink';

export function ChatItemReference({showCloseButton, borderRadius = 9}) {
  return (
    <View style={styles.container}>
      <View style={[styles.inner, {borderRadius}]}>
        <FastImage
          source={{uri: mockImageLink}}
          style={[styles.image, {borderRadius}]}
        />
        <View style={styles.titleSubtitleContainer}>
          {showCloseButton && (
            <FontAwesomeIcon
              size={20}
              icon={faTimes}
              style={styles.closeOption}
              color={'#aaa'}
            />
          )}
          <Text
            style={[styles.title, showCloseButton && {paddingRight: 20}]}
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
    minWidth: 220,
  },
  inner: {
    elevation: 1,
    flexDirection: 'row',
    backgroundColor: '#00000008',
  },
  image: {
    backgroundColor: '#00000008',
    width: 75,
    aspectRatio: 1,
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

import {faCheck} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useObserver} from 'mobx-react-lite';
import {removeSending} from './removeSending';
import {send} from './sendings';
import {getUri} from 'images/getUri';

export function SendingWarn({id}) {
  function handleClosePress() {
    removeSending(id);
  }

  function getFirstImageUri(images: Image[]) {
    return getUri(images[0]);
  }

  return useObserver(() => (
    <View style={[styles.container, styles.border]}>
      <View style={styles.wrapper}>
        <FastImage
          style={styles.image}
          source={{uri: getFirstImageUri(send.sendings[id].images)}}
        />
        {!!send.sendings[id].sent && (
          <FontAwesomeIcon icon={faCheck} color="#0b0" style={styles.icon} />
        )}
        <Text style={styles.text}>
          {send.sendings[id].sent ? 'Enviado' : 'Enviando'}
        </Text>
      </View>
      {!!send.sendings[id].sent && (
        <TouchableOpacity activeOpacity={0.5} onPress={handleClosePress}>
          <Text style={styles.hideText}>fechar</Text>
        </TouchableOpacity>
      )}
    </View>
  ));
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
  },
  icon: {
    marginRight: 4,
  },
  image: {
    marginRight: 5,
    borderRadius: 4,
    width: 45,
    height: 45,
    backgroundColor: '#ddd',
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    flexDirection: 'row',
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  border: {
    borderTopWidth: 2,
    borderColor: '#eee',
    borderStyle: 'solid',
  },
  hideText: {
    fontSize: 16,
    color: '#555',
  },
});

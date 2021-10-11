import {faCheck} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useObserver} from 'mobx-react-lite';
import {removeSending} from './removeSending';

export function SendingWarn({shipment}: {shipment: Shipment}) {
  function handleClosePress() {
    removeSending(shipment.id);
  }

  return useObserver(() => (
    <View style={[styles.container, styles.border]}>
      <View style={styles.wrapper}>
        <FastImage
          style={styles.image}
          source={{uri: Object.keys(shipment.itemFormData.images)[0]}}
        />
        {!!shipment.sent && (
          <FontAwesomeIcon icon={faCheck} color="#0b0" style={styles.icon} />
        )}
        <Text style={styles.text}>
          {shipment.sent ? 'Enviado' : 'Enviando'}
        </Text>
      </View>
      {!!shipment.sent && (
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

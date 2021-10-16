import {faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useNavigation} from '@react-navigation/core';
import {auth} from 'auth/auth';
import {getLocationFromPoint} from 'location/getLocationFromGeoJson';
import {useObserver} from 'mobx-react-lite';
import React from 'react';

import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {concatWithCommas} from 'utils/concatWithCommas';

export function LocationOption() {
  const {navigate} = useNavigation();

  function onPress() {
    navigate('SelectLocation');
  }

  return useObserver(() => (
    <View style={sytles.preventFlex}>
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.7}
        style={sytles.container}>
        <FontAwesomeIcon
          color="green"
          style={sytles.icon}
          icon={faMapMarkerAlt}
        />
        <Text style={sytles.text}>
          {concatWithCommas([auth?.user?.city, auth?.user?.state])}
        </Text>
      </TouchableOpacity>
    </View>
  ));
}

const sytles = StyleSheet.create({
  icon: {
    marginRight: 2,
  },
  preventFlex: {
    flexDirection: 'row',
  },
  container: {
    padding: 5,
    alignItems: 'center',
    flexDirection: 'row',
  },
  text: {
    color: 'green',
    fontSize: 16,
  },
});

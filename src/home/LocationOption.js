import {faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useNavigation} from '@react-navigation/core';
import {auth} from 'auth/auth';
import {locationToString} from 'common/locationToString';
import {locationNameToString} from 'location/locationNameToString';
import React from 'react';

import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {searchOptions} from 'search/searchOptions';

export function LocationOption({location}) {
  const {navigate} = useNavigation();

  function onPress() {
    navigate('SelectLocation');
  }

  return (
    <View>
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
          {locationNameToString(auth.user.locationName)}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const sytles = StyleSheet.create({
  icon: {
    marginRight: 2,
  },
  container: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
  },
  text: {
    color: 'green',
    fontSize: 16,
  },
});

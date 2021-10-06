import {faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {locationToString} from 'common/locationToString';
import React from 'react';

import {StyleSheet, View, Text} from 'react-native';
import {searchOptions} from 'search/searchOptions';

export function LocationOption({location}) {
  return (
    <View style={sytles.container}>
      <FontAwesomeIcon
        icon={faMapMarkerAlt}
        color="green"
        style={sytles.icon}
      />
      <Text style={sytles.text}>
        {locationToString(searchOptions.location)}
      </Text>
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

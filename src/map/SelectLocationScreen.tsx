import {useNavigation} from '@react-navigation/core';
import {api} from 'api/api';
import {refreshPlants} from 'home/loadPlants';
import {CustomHeader} from 'common/CustomHeader';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import MapView, {Region} from 'react-native-maps';
import {ApplyButton} from 'search/ApplyButton';
import {MapTarget} from './MapTarget';
import {auth} from 'auth/auth';
import {getLocationFromPoint} from 'location/getLocationFromGeoJson';

function getInitialLocation() {
  const delta = 0.05;

  if (auth.user?.location) {
    return {
      latitude: auth.user?.location.coordinates[0],
      longitude: auth.user?.location.coordinates[1],
      longitudeDelta: delta,
      latitudeDelta: delta,
    };
  } else {
    return {
      latitude: -15,
      longitude: -54.3,
      longitudeDelta: 40,
      latitudeDelta: 40,
    };
  }
}

const location: Location = {};

export function SelectLocationScreen({route}) {
  const {navigate} = useNavigation();

  async function onPress() {
    const res = await api.put('update-location-by-coordinates', location);
    auth.user = res.data;
    refreshPlants();
    navigate('Home');
  }

  function onRegionChange(region: Region) {
    location.latitude = region.latitude;
    location.longitude = region.longitude;
  }

  return (
    <View style={styles.screen}>
      <CustomHeader title="Sua localização" />
      <View style={{flex: 1}}>
        <MapView
          rotateEnabled={false}
          style={{height: '100%'}}
          onRegionChange={onRegionChange}
          initialRegion={getInitialLocation()}
        />
        <View style={styles.target} pointerEvents="none">
          <MapTarget />
        </View>
      </View>
      <View>
        <ApplyButton onPress={onPress} text="Salvar" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  map: {
    backgroundColor: '#ddd',
    flex: 1,
  },
  screen: {
    backgroundColor: '#ddd',
    flex: 1,
  },
  target: {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {},
});

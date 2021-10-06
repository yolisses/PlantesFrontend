import {auth} from 'auth/auth';
import {CustomHeader} from 'publish/CustomHeader';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import MapView from 'react-native-maps';
import {ApplyButton} from 'search/ApplyButton';
import {MapTarget} from './MapTarget';

const location = {};

export function SelectLocationScreen() {
  function onPress() {
    console.error(location);
    if (!auth.user.location) {
      auth.user.location = {};
    }
    // user location include other information
    auth.user.location.latitude = location.latitude;
    auth.user.location.latitude = location.longitude;
  }

  function onRegionChange(region) {
    location.latitude = region.latitude;
    location.longitude = region.longitude;
  }

  return (
    <View style={styles.screen}>
      <CustomHeader title="Localização" />
      <View style={{flex: 1}}>
        <MapView
          rotateEnabled={false}
          style={{height: '100%'}}
          onRegionChange={onRegionChange}
          initialRegion={{
            longitude: -54.3,
            latitude: -14,
            longitudeDelta: 39.5,
            latitudeDelta: 50,
          }}
        />
        <View style={styles.target} pointerEvents="none">
          <MapTarget />
        </View>
      </View>

      <View>
        <ApplyButton onPress={onPress} />
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

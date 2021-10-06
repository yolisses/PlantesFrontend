import {CustomHeader} from 'publish/CustomHeader';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import MapView from 'react-native-maps';
import {ApplyButton} from 'search/ApplyButton';
import {MapTarget} from './MapTarget';

export function SelectLocationScreen() {
  return (
    <View style={styles.screen}>
      <CustomHeader title="Localização" />
      <View style={{flex: 1}}>
        <MapView
          style={{height: '100%'}}
          rotateEnabled={false}
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
        <ApplyButton />
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

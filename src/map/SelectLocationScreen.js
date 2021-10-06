import React from 'react';
import {StyleSheet, View} from 'react-native';
import MapView from 'react-native-maps';
import {ApplyButton} from 'search/ApplyButton';

export function SelectLocationScreen() {
  return (
    <View style={styles.screen}>
      <View style={{flex: 1}}>
        <MapView
          style={{height: '100%'}}
          initialRegion={{
            longitude: -54.3,
            latitude: -14,
            longitudeDelta: 39.5,
            latitudeDelta: 50,
          }}
        />
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
  buttonContainer: {},
});

import {faCheck, faTimes} from '@fortawesome/free-solid-svg-icons';
import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {LightButton} from 'components/LightButton';

export function MarkUserLocation() {
  const [coordinate, setCoordinate] = useState({
    latitude: 0,
    longitude: 0,
  });
  return (
    <View>
      {/* <Text>{JSON.stringify(coordinate)}</Text> */}
      <MapView
        style={styles.map}
        onPress={e => setCoordinate(e.nativeEvent.coordinate)}>
        <Marker coordinate={coordinate} draggable />
      </MapView>
      <View style={styles.buttonWrapper}>
        <LightButton text="Descartar" icon={faTimes} iconColor="#c55" />
        <LightButton text="Salvar" icon={faCheck} iconColor="#6b6" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  map: {
    backgroundColor: '#ddd',
    height: '100%',
  },
  buttonWrapper: {
    position: 'absolute',
    bottom: 24,
    flexDirection: 'row',
  },
});

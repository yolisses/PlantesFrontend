import React, {useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import MapView, {Marker} from 'react-native-maps';

export function MapScreen() {
  const [users, setUsers] = useState([]);

  return (
    <SafeAreaView>
      <MapView
        style={styles.map}
        initialRegion={{
          longitude: -54.3,
          latitude: -14,
          longitudeDelta: 39.5,
          latitudeDelta: 50,
        }}>
        {users.map(user => {
          const location = user.data().location;
          const {latitude, longitude} = location;
          return (
            <Marker
              key={user.id}
              image={require('../../assets/marker.png')}
              draggable
              coordinate={{latitude, longitude}}
            />
          );
        })}
      </MapView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  map: {
    backgroundColor: '#ddd',
    height: '100%',
  },
  buttonContainer: {},
});

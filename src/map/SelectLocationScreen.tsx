import {useNavigation} from '@react-navigation/core';
import {api} from 'api/api';
import {refreshPlants} from 'home/loadPlants';
import {CustomHeader} from 'common/CustomHeader';
import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import MapView, {Region} from 'react-native-maps';
import {ApplyButton} from 'search/ApplyButton';
import {MapTarget} from './MapTarget';
import {auth} from 'auth/auth';
import {Location} from 'location/Location';
import {User} from 'types/User';
import {useAlert} from 'alert/AlertContext';
import {LocationNotFoundAlert} from 'location/LocationNotFoundAlert';

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

interface Response {
  data: {
    user: User;
    locationFound: boolean;
  };
}

const {latitude, longitude} = getInitialLocation();
const location: Location = {latitude, longitude};

export function SelectLocationScreen() {
  const [saving, setSaving] = useState(false);
  const {navigate} = useNavigation();
  const {showAlert} = useAlert();

  async function onPress() {
    if (saving) {
      return;
    }
    setSaving(true);
    try {
      const res: Response = await api.patch('users/edit-location', location);
      if (res.data.locationFound) {
        auth.user = res.data.user;
        refreshPlants();
        navigate('Home');
      } else {
        showAlert(<LocationNotFoundAlert />);
      }
    } catch (err) {
      console.error(err.response || err);
    }
    setSaving(false);
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
        <ApplyButton
          onPress={onPress}
          text={saving ? 'Salvando...' : 'Salvar'}
        />
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

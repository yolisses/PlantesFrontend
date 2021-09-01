import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {FooterNavigation} from 'navigation/FooterNavigation';
import {LightButton} from 'common/LightButton';
import {usePermissions} from 'permission/PermissionsContext';

export function RequestLocationPermissionScreen() {
  const {requestLocationPermission} = usePermissions();
  return (
    <View style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.title}>Permitir localização</Text>
        <Text style={styles.legend}>Para mostrar as plantas perto de você</Text>
        <LightButton
          text="Permitir"
          onPress={requestLocationPermission}
          style={styles.button}
          textStyle={styles.buttonText}
        />
      </View>
      <FooterNavigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    // backgroundColor: '#fcfcfc',
  },
  title: {
    fontSize: 24,
  },
  legend: {
    fontSize: 18,
    color: 'gray',
    marginBottom: 20,
  },
  button: {
    borderStyle: 'solid',
    // borderWidth: 3,
    // borderColor: '#070',
    backgroundColor: '#080',
    paddingHorizontal: 30,
    paddingVertical: 15,
    elevation: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

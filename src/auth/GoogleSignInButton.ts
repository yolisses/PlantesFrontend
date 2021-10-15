import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';

import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {authenticate} from './authenticate';

export function GoogleSignInButton() {
  async function onPress() {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      authenticate(userInfo.idToken);
    } catch (error) {
      console.error(JSON.stringify(error));
    }
  }

  return (
    <TouchableOpacity
      style={styles.googleButton}
      onPress={onPress}
      activeOpacity={0.9}>
      <Image
        source={require('auth/assets/google.png')}
        style={{height: 50, width: 50}}
      />
      <Text style={styles.googleButtonText}>Continuar com o Google</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4285F4',
    padding: 0,
    borderRadius: 5,
    width: 400,
    maxWidth: '90%',
  },
  googleButtonText: {
    flex: 1,
    color: 'white',
    fontSize: 18,
    paddingLeft: 6,
  },
});

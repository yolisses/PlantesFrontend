import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-community/google-signin';
import React, {useEffect} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {signIn} from './signIn';
import {useUserContext} from './userContext';

export function GoogleSignInButton() {
  const {setGoogleToken} = useUserContext();

  async function onPress() {
    const token = await signIn();
    setGoogleToken(token);
  }

  useEffect(() => {
    GoogleSignin.signInSilently()
      .then(userInfo => console.error(userInfo))
      .catch(err => console.error(err));
  }, []);

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

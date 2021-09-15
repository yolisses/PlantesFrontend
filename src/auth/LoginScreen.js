import {GoogleSignInButton} from 'auth/GoogleSignInButton';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useUserContext} from './userContext';

export function LoginScreen() {
  const {user} = useUserContext();

  return (
    <View style={styles.container}>
      {/* <Text>
        User:
        {'' + user}
        {JSON.stringify(user)}
      </Text> */}
      <Text style={styles.logo}>Plantei</Text>
      <Text style={styles.subtitle}>
        Se cadastre para trocar plantas perto de você
      </Text>
      <GoogleSignInButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  logo: {
    fontSize: 28,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 30,
    color: 'gray',
    padding: 20,
  },
});

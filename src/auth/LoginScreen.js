import {GoogleSignInButton} from 'auth/GoogleSignInButton';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {signIn} from 'auth/oauth';

export function LoginScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Plantei</Text>
      <Text style={styles.subtitle}>
        Se cadastre para trocar plantas perto de você
      </Text>
      <GoogleSignInButton onPress={signIn} />
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

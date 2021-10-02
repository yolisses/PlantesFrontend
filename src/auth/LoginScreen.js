import AsyncStorage from '@react-native-async-storage/async-storage';
import {api} from 'api';
import {GoogleSignInButton} from 'auth/GoogleSignInButton';
import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {auth} from './auth';

export function LoginScreen() {
  useEffect(() => {
    AsyncStorage.getItem('userInfo').then(res => {
      try {
        const {token, user} = JSON.parse(res);
        auth.user = user;
        auth.userId = user._id;
        auth.token = token;

        console.error(token);

        api.defaults.headers.common.auth = `Bearer ${token}`;
      } catch (err) {
        console.error(err);
      }
      console.error(JSON.parse(res));
    });
  }, []);

  return (
    <View style={styles.container}>
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

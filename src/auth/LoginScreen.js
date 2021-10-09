import {GoogleSignInButton} from 'auth/GoogleSignInButton';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';

export function LoginScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <FastImage
          source={require('../../icon/icon.png')}
          style={styles.image}
        />
        <Text style={styles.logo}>Plantes</Text>
      </View>
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
    color: '#000',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
    color: 'gray',
    paddingHorizontal: 20,
  },
  wrapper: {
    alignItems: 'center',
  },
  image: {
    width: 60,
    aspectRatio: 1,
  },
});

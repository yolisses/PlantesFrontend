import React, {useEffect, useState} from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {api} from 'api';
import {LightButton} from '../common/LightButton';

export function UserInfo({height}) {
  const [user, setUser] = useState(null);

  async function getUser() {
    const res = await api.get('/users/11');
    setUser(res.data);
  }
  useEffect(() => {
    getUser();
  }, []);

  return (
    <View style={[styles.container, {height}]}>
      <View style={styles.imageNameWrapper}>
        <FastImage style={styles.image} source={{uri: user?.image}} />
        <Text style={styles.text}>{user?.name}</Text>
      </View>
      <View style={styles.buttonsWrapper}>
        <LightButton text="Seguir" style={styles.button} />
        <LightButton text="Mensagem" style={styles.button} emphasis />
      </View>
    </View>
  );
}

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width,
  },
  imageNameWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  buttonsWrapper: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
    paddingHorizontal: 4,
  },
  button: {
    flex: 1,
    margin: 4,
    padding: 25,
  },
  buttonEmphasis: {
    flex: 1,
    padding: 25,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  image: {
    width: 100,
    aspectRatio: 1,
    borderRadius: 100,
  },
});

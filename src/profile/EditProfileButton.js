import React from 'react';
import {useNavigation} from '@react-navigation/core';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

export function EditProfileButton() {
  const {navigate} = useNavigation();

  function onPress() {
    navigate('EditProfile');
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={styles.container}>
      <Text style={styles.text}>Editar perfil</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    textAlign: 'center',
  },
  container: {
    margin: 10,
    padding: 10,
    elevation: 3,
    marginTop: 0,
    borderRadius: 10,
    backgroundColor: 'white',
  },
});

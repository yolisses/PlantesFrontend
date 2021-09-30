import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

export function EditProfileButton() {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.7}>
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
    marginTop: 0,
    padding: 10,
    elevation: 3,
    borderRadius: 10,
    backgroundColor: 'white',
  },
});

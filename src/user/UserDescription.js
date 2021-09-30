import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export function UserDescription({text}) {
  return (
    <View style={styles.container}>
      {text ? (
        <Text style={styles.text}>{text}</Text>
      ) : (
        <Text style={styles.notProvided}>Usuário sem descrição</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingTop: 0,
  },
  text: {
    fontSize: 18,
  },
  notProvided: {
    textAlign: 'center',
    color: 'gray',
    fontSize: 16,
  },
});

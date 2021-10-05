import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export function NotFound() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nenhum resultado encontrado</Text>
      <Text style={styles.description}>
        Você pode tentar outras palavras ou filtros
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40,
    flex: 1,
  },
  title: {
    fontSize: 20,
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
  },
});

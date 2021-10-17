import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface TextScreenProps {
  title?: string;
  description?: string;
  after?: JSX.Element;
}

export function TextScreen({title, description, after}: TextScreenProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      {after}
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

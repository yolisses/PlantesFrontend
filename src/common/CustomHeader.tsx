import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {BackButton} from './BackButton';

interface CustomHeaderProps {
  title?: string;
  left?: JSX.Element;
  center?: JSX.Element;
  right?: JSX.Element;
  style?: any;
  showBackButton: boolean;
}

export function CustomHeader({
  title,
  left,
  center,
  right,
  style,
  showBackButton = true,
}: CustomHeaderProps) {
  return (
    <View style={[styles.container, style]}>
      {left || (showBackButton && <BackButton />)}
      {center}
      {<Text style={styles.title}>{title}</Text>}
      {right}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 55,
    elevation: 3,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
  title: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
  },
});

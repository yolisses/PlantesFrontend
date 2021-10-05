import {SquareImage} from 'common/SquareImage';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export function SendingCard({sent, image, fraction}) {
  const backgroundColor = sent ? '#060b' : '#000a';

  if (!image) {
    return null;
  }

  return (
    <View>
      <SquareImage uri={image} fraction={fraction} />
      <Text style={[styles.text, {backgroundColor}]}>
        {sent ? 'enviado' : 'enviando...'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    position: 'absolute',
    top: 0,
    right: 0,
    padding: 10,
    color: 'white',
    marginRight: 1,
    marginBottom: 1,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 20,
  },
});

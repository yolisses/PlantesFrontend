import {SquareImage} from 'common/SquareImage';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export function SendingCard({item, fraction}) {
  const backgroundColor = item?.sent ? '#060b' : '#000a';

  if (!item?.images) {
    return null;
  }

  return (
    <View>
      <SquareImage uri={item?.images[0]?.localImage} fraction={fraction} />
      <Text style={[styles.text, {backgroundColor}]}>
        {item?.sent ? 'enviado' : 'enviando...'}
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

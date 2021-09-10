import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';

const activeColor = '#0a0';

export function SelectorWithImage({image, label, style, active, ...rest}) {
  return (
    <View style={styles.padding}>
      <Pressable
        style={[styles.input, style, active && styles.active]}
        {...rest}>
        {active ? (
          <Image source={image} style={[styles.image, styles.activeImage]} />
        ) : (
          <Image source={image} style={styles.image} />
        )}
        <Text style={[styles.text, active && styles.activeText]}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  padding: {
    padding: 2,
    width: '50%',
  },
  input: {
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    width: '100%',
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 17.5,
    color: '#888',
    marginLeft: 5,
  },
  image: {
    width: 25,
    height: 25,
    tintColor: '#ccc',
  },
  active: {
    borderColor: activeColor,
  },
  activeImage: {
    tintColor: '#070',
  },
  activeText: {
    color: '#000',
  },
});

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export function PostButton({icon, text, color}) {
  return (
    <View style={styles.container}>
      <FontAwesomeIcon icon={icon} color={color || '#aaa'} size={25} />
      <Text style={[styles.text, {color: color ? color : '#aaa'}]}>20</Text>
      {/* <Text style={styles.text}>{text}</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    marginLeft: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginLeft: 3,
    marginRight: 4,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

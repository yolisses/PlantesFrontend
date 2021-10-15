import {faAngleDown} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {Fieldset} from './Fieldset';

export function ItemTypeSelector({dataItem}) {
  return (
    <>
      <Pressable>
        <Fieldset label={dataItem.label}>
          <View style={styles.horizontal}>
            <Image style={styles.icon} source={dataItem.options[0].image} />
            <Text style={styles.text}>{dataItem.options[0].label}</Text>
            <FontAwesomeIcon icon={faAngleDown} size={25} color={'#aaa'} />
          </View>
        </Fieldset>
      </Pressable>
    </>
  );
}

const styles = StyleSheet.create({
  horizontal: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 25,
    aspectRatio: 1,
  },
  angle: {},
  text: {
    fontSize: 18,
    textAlign: 'center',
    flex: 1,
  },
});

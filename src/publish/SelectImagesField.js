import {faImage} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useNavigation} from '@react-navigation/core';
import {Fieldset} from 'form/Fieldset';
import React from 'react';
import {FlatList, TouchableOpacity} from 'react-native';
import {StyleSheet, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';

export function SelectImagesField({label, value, control}) {
  const {navigate} = useNavigation();

  function onPress() {
    navigate('Images', {value, control});
  }

  const renderItem = ({item: uri}) => (
    <FastImage source={{uri}} fraction={4} style={styles.image} key={uri} />
  );

  return (
    <View style={styles.container}>
      <Fieldset label={label} styleLabel={styles.label}>
        {Object.keys(value).length !== 0 ? (
          <FlatList
            horizontal
            contentContainerStyle={[styles.inner]}
            showsHorizontalScrollIndicator={false}
            data={Object.keys(value)}
            renderItem={renderItem}
            ListFooterComponent={
              <TouchableOpacity
                style={styles.select}
                activeOpacity={0.7}
                onPress={onPress}>
                <FontAwesomeIcon icon={faImage} size={20} />
                <Text style={styles.text}>Selecionar</Text>
              </TouchableOpacity>
            }
          />
        ) : (
          <TouchableOpacity
            style={styles.select}
            activeOpacity={0.7}
            onPress={onPress}>
            <FontAwesomeIcon icon={faImage} size={20} />
            <Text style={styles.text}>Selecionar</Text>
          </TouchableOpacity>
        )}
      </Fieldset>
    </View>
  );
}

const offset = 2;

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    flexWrap: 'wrap',
  },
  select: {
    height: 160,
    backgroundColor: '#eee',
    padding: 10,
    alignItems: 'center',
    borderRadius: 10,
    margin: offset,
    flex: 1,
    justifyContent: 'center',
  },
  inner: {
    padding: offset,
  },
  container: {
    alignItems: 'stretch',
  },
  label: {
    backgroundColor: 'white',
  },
  imagePlaceholder: {
    width: 90,
    borderWidth: 4,
    aspectRatio: 1,
    borderRadius: 10,
    borderColor: '#aaa',
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 160,
    borderRadius: 10,
    margin: offset,
    aspectRatio: 1,
  },
});

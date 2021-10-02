import {faSeedling} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useNavigation} from '@react-navigation/core';
import {SquareImage} from 'common/SquareImage';
import {Fieldset} from 'form/Fieldset';
import {useObserver} from 'mobx-react-lite';
import React from 'react';
import {ScrollView, TouchableOpacity} from 'react-native';
import {StyleSheet, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {selectedImages} from './selectedImages';

export function SelectImagesField() {
  const {navigate} = useNavigation();

  function onPress() {
    navigate('Images');
  }

  return useObserver(() => (
    //   <Text style={styles.text}>Selecionar imagens</Text>
    <View style={styles.container}>
      <Fieldset label="Fotos" styleLabel={styles.label}>
        <ScrollView
          horizontal
          style={{flex: 1}}
          contentContainerStyle={[
            styles.inner,
            !Object.keys(selectedImages).length && {flex: 1},
          ]}
          showsHorizontalScrollIndicator={false}>
          {/* {!Object.keys(selectedImages).length && (
            <View style={styles.imagePlaceholder}>
              <FontAwesomeIcon icon={faSeedling} size={60} color="#aaa" />
            </View>
          )} */}
          {Object.keys(selectedImages).map(uri => (
            <FastImage
              source={{uri}}
              fraction={4}
              style={styles.image}
              key={uri}
            />
          ))}
          <TouchableOpacity
            style={styles.select}
            activeOpacity={0.7}
            onPress={onPress}>
            <Text style={styles.text}>Selecionar</Text>
          </TouchableOpacity>
        </ScrollView>
      </Fieldset>
    </View>
  ));
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
    flex: 1,
    alignItems: 'center',
    borderRadius: 10,
    margin: offset,
    justifyContent: 'center',
  },
  inner: {
    flexDirection: 'row',
    alignItems: 'stretch',
    padding: offset,
  },
  container: {
    alignItems: 'stretch',
    // marginTop: 20,
  },
  label: {
    // position: 'absolute',
    // zIndex: 10,
    // transform: [{translateY: -20}],
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

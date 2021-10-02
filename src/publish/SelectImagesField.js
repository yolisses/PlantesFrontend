import {faSeedling} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useNavigation} from '@react-navigation/core';
import {Fieldset} from 'form/Fieldset';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {StyleSheet, Text, View} from 'react-native';

export function SelectImagesField() {
  const {navigate} = useNavigation();

  function onPress() {
    navigate('Images');
  }

  return (
    //   <Text style={styles.text}>Selecionar imagens</Text>
    <View style={styles.container}>
      <Fieldset label="Fotos" styleLabel={styles.label}>
        <TouchableOpacity
          style={styles.inner}
          activeOpacity={0.7}
          onPress={onPress}>
          <View style={styles.imagePlaceholder}>
            <FontAwesomeIcon icon={faSeedling} size={60} color="#aaa" />
          </View>
          <Text style={styles.text}>Selecionar fotos</Text>
        </TouchableOpacity>
      </Fieldset>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
  },
  inner: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  container: {
    alignItems: 'stretch',
    marginTop: 20,
  },
  label: {
    position: 'absolute',
    zIndex: 10,
    transform: [{translateY: -20}],
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
});

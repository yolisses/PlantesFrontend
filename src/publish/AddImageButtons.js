import React from 'react';
import {faCamera, faImages} from '@fortawesome/free-solid-svg-icons';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet, View} from 'react-native';
import {LightButton} from '../common/LightButton';

const emphasisColor = '#090';

export function AddImageButtons() {
  const {navigate} = useNavigation();

  return (
    <View style={styles.container}>
      <LightButton
        icon={faCamera}
        text="Tirar foto"
        style={styles.button}
        iconColor={emphasisColor}
        onPress={() => navigate('Camera')}
      />
      <LightButton
        icon={faImages}
        text="Selecionar imagem"
        style={styles.button}
        iconColor={emphasisColor}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  button: {
    paddingHorizontal: 30,
    paddingVertical: 15,
  },
});

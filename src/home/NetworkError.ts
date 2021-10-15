import {LightButton} from 'common/LightButton';
import {TextScreen} from 'common/TextScreen';
import React from 'react';
import {StyleSheet} from 'react-native';

export function NetworkError({retry}) {
  return (
    <TextScreen
      title="Não foi possível se conectar"
      description="Por favor confira sua conexão com a internet e tente novamente"
      after={
        <LightButton
          text="tentar novamente"
          style={styles.button}
          onPress={retry}
        />
      }
    />
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 20,
    padding: 20,
  },
});

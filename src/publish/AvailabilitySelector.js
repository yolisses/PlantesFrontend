import React from 'react';
import {StyleSheet, View} from 'react-native';

import {Fieldset} from 'form/Fieldset';
import {ToggleButton} from 'form/ToggleButton';

export function AvailabilitySelector() {
  return (
    <View>
      <Fieldset label="Disponível para" style={styles.fieldset} disableBorder>
        <ToggleButton
          label="Doação"
          style={styles.button}
          buttonStyle={styles.button}
        />
        <ToggleButton
          label="Troca"
          style={styles.button}
          buttonStyle={styles.button}
        />
        <ToggleButton
          label="Venda"
          style={styles.button}
          buttonStyle={styles.button}
        />
      </Fieldset>
    </View>
  );
}

const styles = StyleSheet.create({
  fieldset: {
    flexDirection: 'row',
    paddingHorizontal: 0,
    paddingBottom: 0,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    paddingVertical: 15,
  },
});

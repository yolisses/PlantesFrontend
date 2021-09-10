import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';

import {Fieldset} from 'form/Fieldset';
import {TextInput} from 'form/TextInput';
import {ToggleButton} from 'form/ToggleButton';

export function AvailabilitySelector() {
  const [sell, setSell] = useState(false);

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
          onChange={setSell}
          style={styles.button}
          buttonStyle={styles.button}
        />
      </Fieldset>
      <View opacity={sell ? 1 : 0}>
        <TextInput label="Preço" editable={sell} keyboardType="decimal-pad" />
      </View>
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

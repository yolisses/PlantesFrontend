import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';

import {Fieldset} from 'form/Fieldset';
import {ToggleButton} from 'form/ToggleButton';

import {publishData} from 'publish/publishData';
import {TextInput} from 'form/TextInput';

export function AvailabilitySelector() {
  const [sell, setSell] = useState(false);

  const {availabilities, price} = publishData;

  return (
    <View>
      <Fieldset label="Disponível para" style={styles.fieldset} disableBorder>
        <ToggleButton
          option={availabilities.donate}
          buttonStyle={styles.button}
          style={styles.button}
        />
        <ToggleButton
          option={availabilities.swap}
          buttonStyle={styles.button}
          style={styles.button}
        />
        <ToggleButton
          option={availabilities.sell}
          buttonStyle={styles.button}
          style={styles.button}
          onChange={setSell}
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

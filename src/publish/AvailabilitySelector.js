import React from 'react';
import {StyleSheet} from 'react-native';

import {TagsSelector} from 'form/TagsSelector';
import {availabilities} from './data/availiabilities';

export function AvailabilitySelector() {
  return (
    <TagsSelector
      options={availabilities}
      buttonStyle={styles.button}
      label="Disponível para"
    />
  );
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    paddingVertical: 15,
    justifyContent: 'center',
  },
});

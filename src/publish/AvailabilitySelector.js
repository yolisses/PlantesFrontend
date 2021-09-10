import React from 'react';
import {StyleSheet} from 'react-native';

import {Field} from 'react-final-form';
import {TagsSelector} from 'form/TagsSelector';
import {availabilities} from './data/availiabilities';

export function AvailabilitySelector() {
  return (
    <Field
      name="availabilities"
      render={({input}) => (
        <TagsSelector
          {...input}
          options={availabilities}
          buttonStyle={styles.button}
          label="Disponível para"
        />
      )}
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

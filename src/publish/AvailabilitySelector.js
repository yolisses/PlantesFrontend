import React from 'react';
import {StyleSheet} from 'react-native';

import {TagsSelector} from 'form/TagsSelector';
import {availabilities} from './data/availiabilities';
import {usePublish} from './contexts/PublishContext';
import {PriceInput} from './PriceInput';

export function AvailabilitySelector() {
  const {
    availabilities: selected,
    pushAvailability,
    removeAvailability,
  } = usePublish();

  const isSellActive = selected.indexOf('sell') !== -1;

  return (
    <>
      <TagsSelector
        label="Disponível para"
        selectedTags={selected}
        options={availabilities}
        pushTag={pushAvailability}
        buttonStyle={styles.button}
        removeTag={removeAvailability}
      />
      {isSellActive && <PriceInput />}
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    paddingVertical: 15,
    justifyContent: 'center',
  },
});

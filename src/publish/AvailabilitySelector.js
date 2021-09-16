import React from 'react';
import {StyleSheet} from 'react-native';

import {PriceInput} from 'form/PriceInput';
import {TagsSelector} from 'form/TagsSelector';

import {availabilities} from './data/availiabilities';
import {usePublish} from './contexts/PublishContext';

export function AvailabilitySelector() {
  const {price, setPrice} = usePublish();
  const {
    availabilities: selected,
    pushAvailability,
    removeAvailability,
  } = usePublish();

  const isSellActive = selected.indexOf('sell') !== -1;

  return <></>;
}

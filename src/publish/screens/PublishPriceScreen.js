import React from 'react';
import {ScrollView} from 'react-native';
import {AvailabilitySelector} from 'publish/AvailabilitySelector';
import {publishData} from 'publish/publishData';
import {TextInputInt} from 'form/TextInputInt';

export function PublishPriceScreen() {
  const {amount} = publishData;
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{padding: 10}}>
      <AvailabilitySelector />
      <TextInputInt
        dataItem={amount}
        optional
        autoCorrect={false}
        keyboardType="decimal-pad"
        autoCompleteType={'off'}
      />
    </ScrollView>
  );
}

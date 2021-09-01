import React from 'react';
import {ScrollView} from 'react-native';
import {PublishScreenLayout} from './PublishScreenLayout';
import {AvailabilitySelector} from 'publish/AvailabilitySelector';
import {publishData} from 'publish/publishData';
import {TextInputInt} from 'form/TextInputInt';

export function PublishPriceScreen() {
  const {amount} = publishData;
  return (
    <PublishScreenLayout ratio={3 / 3} nextRoute={'Home'}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <AvailabilitySelector />
        <TextInputInt
          dataItem={amount}
          optional
          autoCorrect={false}
          keyboardType="decimal-pad"
          autoCompleteType={'off'}
        />
      </ScrollView>
    </PublishScreenLayout>
  );
}

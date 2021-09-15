import React from 'react';
import {ScrollView} from 'react-native';

import {TextInput} from 'form/TextInput';

import {BackButton} from 'publish/BackButton';
import {NextButton} from 'publish/NextButton';
import {ProgressBar} from 'publish/ProgressBar';
import {CustomHeader} from 'publish/CustomHeader';
import {AvailabilitySelector} from 'publish/AvailabilitySelector';
import {PriceInput} from 'publish/PriceInput';

function ValidatedHeader() {
  return (
    <CustomHeader
      title="Publicar"
      left={<BackButton />}
      right={<NextButton route="Price" />}
    />
  );
}

export function PublishPriceScreen() {
  return (
    <>
      <ValidatedHeader />
      <ProgressBar ratio={3 / 3} />
      <ScrollView showsVerticalScrollIndicator={false} style={{padding: 10}}>
        <AvailabilitySelector />
        <PriceInput />
        <TextInput
          optional
          label="Quantidade"
          autoCorrect={false}
          autoCompleteType={'off'}
          keyboardType="decimal-pad"
        />
      </ScrollView>
    </>
  );
}

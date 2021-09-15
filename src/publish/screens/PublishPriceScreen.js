import React from 'react';
import {ScrollView} from 'react-native';

import {TextInput} from 'form/TextInput';

import {BackButton} from 'publish/BackButton';
import {NextButton} from 'publish/NextButton';
import {ProgressBar} from 'publish/ProgressBar';
import {CustomHeader} from 'publish/CustomHeader';
import {AvailabilitySelector} from 'publish/AvailabilitySelector';
import {usePublish} from 'publish/contexts/PublishContext';

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
  const {amount, setAmount} = usePublish();

  return (
    <>
      <ValidatedHeader />
      <ProgressBar ratio={3 / 3} />
      <ScrollView showsVerticalScrollIndicator={false} style={{padding: 10}}>
        <AvailabilitySelector />
        <TextInput
          optional
          value={amount}
          label="Quantidade"
          autoCorrect={false}
          setValue={setAmount}
          autoCompleteType={'off'}
          keyboardType="decimal-pad"
        />
      </ScrollView>
    </>
  );
}

import React from 'react';
import {ScrollView} from 'react-native';

import {IntInput} from 'form/IntInput';

import {BackButton} from 'publish/BackButton';
import {NextButton} from 'publish/NextButton';
import {ProgressBar} from 'publish/ProgressBar';
import {CustomHeader} from 'publish/CustomHeader';
import {usePublish} from 'publish/contexts/PublishContext';
import {AvailabilitySelector} from 'publish/AvailabilitySelector';

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
        <IntInput
          optional
          value={amount}
          label="Quantidade"
          setValue={setAmount}
        />
      </ScrollView>
    </>
  );
}

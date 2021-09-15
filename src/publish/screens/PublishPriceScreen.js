import React from 'react';
import {ScrollView} from 'react-native';

import {IntInput} from 'publish/IntInput';
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

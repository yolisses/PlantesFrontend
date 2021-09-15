import React from 'react';
import {ScrollView, Text} from 'react-native';

import {IntInput} from 'form/IntInput';

import {BackButton} from 'publish/BackButton';
import {NextButton} from 'publish/NextButton';
import {ProgressBar} from 'publish/ProgressBar';
import {CustomHeader} from 'publish/CustomHeader';
import {usePublish} from 'publish/contexts/PublishContext';
import {AvailabilitySelector} from 'publish/AvailabilitySelector';

function ValidatedHeader() {
  const {price} = usePublish();
  const {availabilities} = usePublish();

  let canContinue = availabilities && availabilities.length > 0;
  const includeSell = availabilities.indexOf('sell') !== -1;
  if (!!includeSell && !price) {
    console.error('' + false);
    canContinue = false;
  }

  return (
    <CustomHeader
      title="Publicar"
      left={<BackButton />}
      right={canContinue && <NextButton route="Price" />}
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

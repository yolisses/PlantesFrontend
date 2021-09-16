import React, {useReducer} from 'react';
import {ScrollView, Text} from 'react-native';

import {IntInput} from 'form/IntInput';

import {BackButton} from 'publish/BackButton';
import {NextButton} from 'publish/NextButton';
import {ProgressBar} from 'publish/ProgressBar';
import {CustomHeader} from 'publish/CustomHeader';
import {AvailabilitySelector} from 'publish/AvailabilitySelector';
import {reducer} from 'publish/reducer';

function ValidatedHeader({price, availabilities}) {
  // let canContinue = availabilities && availabilities.length > 0;
  // const includeSell = availabilities.indexOf('sell') !== -1;
  // if (!!includeSell && !price) {
  //   console.error('' + false);
  //   canContinue = false;
  // }

  return (
    <CustomHeader
      title="Publicar"
      left={<BackButton />}
      right={true && <NextButton route="Price" />}
    />
  );
}

export function PublishPriceScreen() {
  const [state, dispatch] = useReducer(reducer, {});

  return (
    <>
      <ValidatedHeader />
      <ProgressBar ratio={3 / 3} />
      <Text>{JSON.stringify(state)}</Text>
      <ScrollView showsVerticalScrollIndicator={false} style={{padding: 10}}>
        <AvailabilitySelector />
        <IntInput
          id="amount"
          label="Quantidade"
          optional
          value={state.amount}
          dispatch={dispatch}
        />
      </ScrollView>
    </>
  );
}

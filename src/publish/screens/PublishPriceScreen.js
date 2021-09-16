import React, {useReducer} from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';

import {IntInput} from 'form/IntInput';

import {BackButton} from 'publish/BackButton';
import {NextButton} from 'publish/NextButton';
import {ProgressBar} from 'publish/ProgressBar';
import {CustomHeader} from 'publish/CustomHeader';
import {reducer} from 'publish/reducer';
import {PriceInput} from 'form/PriceInput';
import {availabilities} from 'publish/data/availiabilities';
import {TagsSelector} from 'form/TagsSelector';

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
        <TagsSelector
          id={null}
          label="Disponível para"
          value={state}
          dispatch={dispatch}
          options={availabilities}
          buttonStyle={styles.button}
        />
        <PriceInput label="Preço" value={state.price} dispatch={dispatch} />
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

const styles = StyleSheet.create({
  button: {
    flex: 1,
    paddingVertical: 15,
    justifyContent: 'center',
  },
});

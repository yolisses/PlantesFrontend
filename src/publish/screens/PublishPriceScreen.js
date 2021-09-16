import React, {useMemo, useReducer} from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';

import {IntInput} from 'form/IntInput';

import {reducer} from 'publish/reducer';
import {BackButton} from 'publish/BackButton';
import {NextButton} from 'publish/NextButton';
import {ProgressBar} from 'publish/ProgressBar';
import {CustomHeader} from 'publish/CustomHeader';
import {availabilities} from 'publish/data/availiabilities';

import {PriceInput} from 'form/PriceInput';
import {TagsSelector} from 'form/TagsSelector';

function ValidatedHeader({sell, swap, donate, price}) {
  let canContinue = (sell || swap || donate) && !(sell && !price);
  return useMemo(
    () => (
      <CustomHeader
        title="Publicar"
        left={<BackButton />}
        right={canContinue && <NextButton route="Price" />}
      />
    ),
    [sell, swap, donate, price],
  );
}

export function PublishPriceScreen() {
  const [state, dispatch] = useReducer(reducer, {});

  return (
    <>
      <ValidatedHeader
        price={state._localPrice}
        sell={state.sell}
        swap={state.swap}
        donate={state.donate}
      />
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
        {state.sell && (
          <PriceInput
            id="price"
            label="Preço"
            value={state.price}
            dispatch={dispatch}
            onValueChange={value => dispatch({id: '_localPrice', value})}
          />
        )}
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

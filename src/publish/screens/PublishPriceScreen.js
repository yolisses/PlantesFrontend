import React, {useMemo} from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';

import {IntInput} from 'form/IntInput';

import {BackButton} from 'publish/BackButton';
import {NextButton} from 'publish/NextButton';
import {ProgressBar} from 'publish/ProgressBar';
import {CustomHeader} from 'publish/CustomHeader';
import {availabilities} from 'publish/data/availiabilities';

import {PriceInput} from 'form/PriceInput';
import {TagsSelector} from 'form/TagsSelector';
import {useShallowData} from 'publish/ShallowDataContext';

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
  const {data} = useShallowData();

  return (
    <>
      <ValidatedHeader />
      <ProgressBar ratio={3 / 3} />
      <ScrollView showsVerticalScrollIndicator={false} style={{padding: 10}}>
        <TagsSelector
          id="availabilities"
          data={data}
          label="Disponível para"
          options={availabilities}
          buttonStyle={styles.button}
        />
        <PriceInput id="price" data={data} label="Preço" />
        <IntInput id="amount" data={data} label="Quantidade" optional />
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

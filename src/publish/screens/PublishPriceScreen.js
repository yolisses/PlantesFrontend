import React, {useMemo, useState} from 'react';
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

function ValidatedHeader({sell, hasPrice, hasAvailability}) {
  let canContinue = hasAvailability && !(sell && !hasPrice);

  return useMemo(
    () => (
      <CustomHeader
        title="Publicar"
        left={<BackButton />}
        right={canContinue && <NextButton route="Price" />}
      />
    ),
    [canContinue],
  );
}

export function PublishPriceScreen() {
  const {data} = useShallowData();

  const [hasAvailability, setHasAvailability] = useState(
    validAvailability(data.availabilities),
  );
  const [sell, setSell] = useState(!!data?.availabilities?.sell);
  const [hasPrice, setHasPrice] = useState(!!data.price);

  function validAvailability(obj) {
    return obj && (obj.swap || obj.sell || obj.donate);
  }

  function validateAvailability(value) {
    if (value && value.sell) {
      setSell(true);
    } else {
      setSell(false);
    }
    if (validAvailability(value)) {
      setHasAvailability(true);
    } else {
      setHasAvailability(false);
    }
  }

  function validatePrice(value) {
    setHasPrice(!!value);
  }

  return (
    <>
      <ValidatedHeader
        sell={sell}
        hasPrice={hasPrice}
        hasAvailability={hasAvailability}
      />
      <ProgressBar ratio={3 / 3} />
      <ScrollView showsVerticalScrollIndicator={false} style={{padding: 10}}>
        <TagsSelector
          id="availabilities"
          data={data}
          label="Disponível para"
          options={availabilities}
          buttonStyle={styles.button}
          onValueChange={validateAvailability}
        />
        {sell && (
          <PriceInput
            id="price"
            data={data}
            label="Preço"
            onChangeValue={validatePrice}
          />
        )}
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

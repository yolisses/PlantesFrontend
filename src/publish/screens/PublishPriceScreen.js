import React, {useMemo, useState} from 'react';
import {ScrollView, StyleSheet} from 'react-native';

import {IntInput} from 'form/IntInput';

import {BackButton} from 'publish/BackButton';
import {ProgressBar} from 'publish/ProgressBar';
import {CustomHeader} from 'publish/CustomHeader';
import {
  availabilities,
  availabilitiesLabels,
} from 'publish/data/availiabilities';

import {PriceInput} from 'form/PriceInput';
import {TagsSelector} from 'form/TagsSelector';

import {publishData} from 'publish/publishData';
import {FinishButton} from 'publish/FinishButton';

function ValidatedHeader({sell, hasPrice, hasAvailability}) {
  let canContinue = hasAvailability && !(sell && !hasPrice);
  return useMemo(
    () => (
      <CustomHeader
        title="Publicar"
        left={<BackButton />}
        right={canContinue && <FinishButton />}
      />
    ),
    [canContinue],
  );
}

export function PublishPriceScreen() {
  const [hasAvailability, setHasAvailability] = useState(
    validAvailability(publishData.availabilities),
  );
  const [sell, setSell] = useState(!!publishData?.availabilities?.sell);
  const [hasPrice, setHasPrice] = useState(!!publishData.price);

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
          data={publishData}
          label="Disponível para"
          options={availabilities}
          buttonStyle={styles.button}
          labels={availabilitiesLabels}
          onValueChange={validateAvailability}
        />
        {sell && (
          <PriceInput
            id="price"
            data={publishData}
            label="Preço"
            onChangeValue={validatePrice}
          />
        )}
        <IntInput id="amount" data={publishData} label="Quantidade" optional />
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

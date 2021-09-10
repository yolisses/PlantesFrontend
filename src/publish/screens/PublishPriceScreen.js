import React from 'react';
import {Field} from 'react-final-form';
import {ScrollView} from 'react-native';

import {MoneySign} from 'form/MoneySign';
import {TextInput} from 'form/TextInput';
import {allowRegexMoney} from 'form/allowRegex/allowRegexMoney';

import {BackButton} from 'publish/BackButton';
import {NextButton} from 'publish/NextButton';
import {ProgressBar} from 'publish/ProgressBar';
import {CustomHeader} from 'publish/CustomHeader';
import {AvailabilitySelector} from 'publish/AvailabilitySelector';

function ValidatedHeader({thereIsSomeImage}) {
  return (
    <CustomHeader
      title="Publicar"
      left={<BackButton />}
      right={thereIsSomeImage && <NextButton route="Detail" />}
    />
  );
}

export function PublishPriceScreen() {
  return (
    <>
      <ValidatedHeader />
      <ProgressBar ratio={3 / 3} />
      <ScrollView showsVerticalScrollIndicator={false} style={{padding: 10}}>
        <AvailabilitySelector />
        <Field
          name="price"
          type="number"
          format={value => {
            const found = value?.match(allowRegexMoney);
            return found ? found[0] : null;
          }}
          render={({input, meta}) => {
            return (
              <TextInput
                {...input}
                label="Preço"
                error={meta.error}
                autoCorrect={false}
                active={meta.active}
                onBlur={e => {
                  input.onBlur(e);
                }}
                autoCompleteType={'off'}
                leftChild={<MoneySign />}
                // keyboardType="decimal-pad"
              />
            );
          }}
        />
        <Field
          name="amount"
          type="number"
          parse={value => (value ? Number(value.replace(/[^0-9]/g, '')) : null)}
          render={({input, meta}) => {
            return (
              <TextInput
                optional
                {...input}
                label="Quantidade"
                error={meta.error}
                autoCorrect={false}
                active={meta.active}
                autoCompleteType={'off'}
                keyboardType="decimal-pad"
              />
            );
          }}
        />
      </ScrollView>
    </>
  );
}

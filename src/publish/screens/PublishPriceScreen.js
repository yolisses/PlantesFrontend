import React from 'react';
import {ScrollView} from 'react-native';

import {TextInput} from 'form/TextInput';
import {BackButton} from 'publish/BackButton';
import {NextButton} from 'publish/NextButton';
import {ProgressBar} from 'publish/ProgressBar';
import {CustomHeader} from 'publish/CustomHeader';
import {AvailabilitySelector} from 'publish/AvailabilitySelector';
import {Field} from 'react-final-form';

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
          name="amount"
          type="number"
          format={value => value?.replace(/[^0-9]/g, '')}>
          {({input, meta}) => {
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
        </Field>
      </ScrollView>
    </>
  );
}

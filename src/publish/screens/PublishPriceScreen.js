import React from 'react';
import {ScrollView} from 'react-native';

import {TextInput} from 'form/TextInput';
import {BackButton} from 'publish/BackButton';
import {NextButton} from 'publish/NextButton';
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
      <ScrollView showsVerticalScrollIndicator={false} style={{padding: 10}}>
        <AvailabilitySelector />
        <TextInput
          optional
          autoCorrect={false}
          autoCompleteType={'off'}
          keyboardType="decimal-pad"
        />
      </ScrollView>
    </>
  );
}

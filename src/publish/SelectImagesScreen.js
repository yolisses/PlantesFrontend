import {useNavigation} from '@react-navigation/core';
import React from 'react';

import {Controller, useForm} from 'react-hook-form';
import {ImagesPicker} from './ImagesPicker';

export function SelectImagesScreen({route}) {
  const {onChange: routeOnChange, value} = route.params;
  const {goBack} = useNavigation();
  const {control} = useForm();

  return (
    <Controller
      name="images"
      control={control}
      defaultValue={{...value}}
      render={({field: {onChange, value}}) => (
        <ImagesPicker
          value={value}
          onChange={arg => onChange(arg)}
          onFinish={() => {
            routeOnChange(value);
            goBack();
          }}
        />
      )}
    />
  );
}

import {useNavigation} from '@react-navigation/core';
import React from 'react';

import {Controller} from 'react-hook-form';
import {ImagesPicker} from './ImagesPicker';

export function SelectImagesScreen({route}) {
  const {control, onChange: routeOnChange} = route.params;
  const {goBack} = useNavigation();
  return (
    <Controller
      name="images"
      control={control}
      defaultValue={{}}
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

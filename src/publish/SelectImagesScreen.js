import React from 'react';

import {Controller} from 'react-hook-form';
import {ImagesPicker} from './ImagesPicker';

export function SelectImagesScreen({route}) {
  const {control, onChange: routeOnChange} = route.params;
  return (
    <Controller
      name="images"
      control={control}
      defaultValue={{}}
      render={({field: {onChange, value}}) => (
        <ImagesPicker
          value={value}
          onChange={arg => {
            routeOnChange(arg);
            return onChange(arg);
          }}
        />
      )}
    />
  );
}

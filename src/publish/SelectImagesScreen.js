import React from 'react';

import {Controller} from 'react-hook-form';
import {ImagesPicker} from './ImagesPicker';

export function SelectImagesScreen({route}) {
  const {control} = route.params;
  return (
    <Controller
      name="images"
      control={control}
      defaultValue={{}}
      render={({field: {onChange, value}}) => (
        <ImagesPicker value={value} onChange={onChange} />
      )}
    />
  );
}
